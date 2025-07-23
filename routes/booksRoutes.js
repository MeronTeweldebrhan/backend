import express from 'express'
import Book from '../models/Books.js'

const router=express.Router()

router.post('/books', async (req, res) => {
  try {
    const { title } = req.body;
    const newBook = new Book({ title });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to create book' });
  }
});



export default router