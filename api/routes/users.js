import express from 'express';
import {
  deleteUser,
  getAllUsers,
  getUser,
  updateUsers,
} from '../controllers/users.js';
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//checktoken
// router.get('/checkauthencation', verifyToken, (req, res, next) => {
//   res.send('Hello user, you are authenticated');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//   res.send('Hello user, you are logged in and you can delete your account');
// });

// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//   res.send('Hello admin, you are logged in and you can delete all accounts');
// });

//update
router.put('/:id', verifyUser, updateUsers);

//delete
router.delete('/:id', verifyUser, deleteUser);

//Get
router.get('/:id', verifyUser, getUser);

//Getall
router.get('/', verifyAdmin, getAllUsers);

export default router;
