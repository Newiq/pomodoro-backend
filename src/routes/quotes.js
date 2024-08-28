import { Router } from 'express';
import axios from 'axios';

const quotesRouter = Router();

quotesRouter.get('/', async (_req, res) => {
    const options = {
        method: 'GET',
        url: 'https://quotes15.p.rapidapi.com/quotes/random/',
        params: {
            language_code: 'en'
        },
        headers: {
            'x-rapidapi-key': process.env.RAPIDAPI_KEY || '1bbdd83d18msh6cae122e8bb17e9p1e1f95jsn607796feb21a',
            'x-rapidapi-host': 'quotes15.p.rapidapi.com'
        }
    };
    
    try {
        const response = await axios.request(options);
        const quoteContent = response.data.content;  // 提取 content 字段
        res.json({ content: quoteContent });  // 仅返回 content 字段给前端
    } catch (error) {
        console.error('Error fetching quote:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error fetching quote from API' });
    }
});

export default quotesRouter;
