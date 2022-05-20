import express from 'express';
import auth from '../middleware/auth';
import {
  userFollowAll,
  getUser,
  getAllUsers,
  removeConnection,
  userUpdate,
  getRandomUser,
  getUserById,
} from '../controllers/userControllers';

const router = express.Router();

router.put('/user/update', auth, userUpdate);

router.put('/user/removeConnection', auth, removeConnection);

router.post('/user/followall', auth, userFollowAll);

router.get('/user/getuser', auth, getUser);

router.get('/user/getallusers', getAllUsers);

router.get('/user/getrandomuser', getRandomUser);

router.get('/user/getuserbyid/:id', getUserById);
export default router;
