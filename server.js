import express from 'express';
import dotenv from 'dotenv';
import bookRoutes from './routes/booksRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors';
import connection from './config/connection.js';

dotenv.config();
const PORT =process.env.PORT || 3000;


const app = express(); 
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', bookRoutes)
app.use('/api/users',userRoutes)



connection.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

