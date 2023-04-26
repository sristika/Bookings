import express from 'express';
import { verifyAdmin } from '../utils/verifyToken.js';
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} from '../controllers/rooms.js';

const router = express.Router();

//create
router.post('/:hotelid', verifyAdmin, createRoom);

//update
router.put('/:id', verifyAdmin, updateRoom);

//delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);

//Get
router.get('/:id', getRoom);

//Getall
router.get('/', getRooms);

export default router;
