import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import imagesRouter from './src/routes/images.js';
import quotesRouter from './src/routes/quotes.js'; 

const app = express();

app.use(express.json());
app.use('/api/images', imagesRouter);
app.use('/api/quotes', quotesRouter);  

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
