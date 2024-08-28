import { Router } from 'express';
import axios from 'axios';

const imagesRouter = Router();

imagesRouter.get('/', async (_req, res) => {
    console.log('UNSPLASH_ACCESS_KEY:', process.env.UNSPLASH_ACCESS_KEY);
    try {
        const response = await axios.get(`https://api.unsplash.com/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}`);
        const imageUrl = response.data.urls.full;  
        res.json({ url: imageUrl });
    } catch (error) {
        console.error('Error fetching image:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Error fetching image from Unsplash' });
    }
});

export default imagesRouter;
