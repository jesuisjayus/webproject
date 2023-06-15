import express from 'express';
import { getUser, update, deleteUser, follow, unfollow} from '../controllers/user.js';
import { verifyToken } from '../verifyToken.js';

const router = express.Router();

router.put('/:id', update, verifyToken)
router.get('/find/:id', getUser);
router.delete('/:id', verifyToken, deleteUser);
router.put('/follow/:id', verifyToken, follow);
router.delete('/unfollow/:id', verifyToken, unfollow);

export default router;