import express from 'express';
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors';
import connection from './config/connection.js';

dotenv.config();
const PORT =process.env.PORT || 3000;


const app = express(); 
app.use(cors({origin: "http://localhost:5173"}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/post', postRoutes)
app.use('/api/users',userRoutes)



connection.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

