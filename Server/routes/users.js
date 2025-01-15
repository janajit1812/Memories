import express from 'express';
import { signin,signup,googleSignUp } from '../controllers/users.js';
import auth from '../middleware/auth.js';
const router=express.Router();

router.post('/signin',signin);
router.post('/signup',signup);
router.post('/googleSignUp',googleSignUp);

export default router;