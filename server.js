import express from 'express';
import dotenv from 'dotenv';
import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors';
import connection from './config/connection.js';

dotenv.config();
const PORT =process.env.PORT || 3000;
// const PROD_URL = process.env.PROD_URL;

const app = express(); 

// const allowedOrigins = [
//   PROD_URL,
//   'http://localhost:5173'
// ];

// app.use(cors({
//   origin: function (origin, callback) {
//     // allow requests with no origin (like mobile apps or curl)
//     if (!origin || allowedOrigins.includes(origin)) {
//       callback(null, true);
//     } else {
//       callback(new Error('CORS not allowed from this origin: ' + origin));
//     }
//   },
// }));
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/posts', postRoutes)
app.use('/api/users',userRoutes)



connection.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

