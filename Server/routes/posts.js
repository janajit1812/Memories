import express from 'express';
import { getPost,createPost,updatePost,deletePost,likePost } from '../controllers/posts.js';
import auth from '../middleware/auth.js';
const router=express.Router();

// we have added '/post' prefix in the index.js file before postRoutes. That means, we have to use '/post' before any endpoint that we create.
router.get('/',getPost);
router.post('/',auth,createPost);
router.patch('/:id',auth,updatePost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/likedPost',auth,likePost);

export default router;