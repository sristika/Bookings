import express from 'express';
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getHotel,
  updateHotels,
} from '../controllers/hotels.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create
router.post('/', verifyAdmin, createHotel);

//update
router.put('/:id', verifyAdmin, updateHotels);

//delete
router.delete('/:id', verifyAdmin, deleteHotel);

//Get
router.get('/:id', getHotel);

//Getall
router.get('/', getAllHotels);

export default router;
