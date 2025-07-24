import express from 'express'
import { createPost,getPost } from '../controllers/postController.js';
import { authMiddleware } from '../utlis/auth.js';

const router=express.Router()

router.use(authMiddleware)

router.post('/', createPost);
router.get('/', getPost);



export default router