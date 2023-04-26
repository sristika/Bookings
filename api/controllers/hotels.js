import Hotel from '../models/Hotel.js';

export const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(new createError(401, 'Sorry not found'));
  }
};

export const updateHotels = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(new createError(401, 'Sorry not found'));
  }
};

export const deleteHotel = async (req, res) => {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json('Hotel deleted');
  } catch (error) {
    next(new createError(401, 'Sorry not found'));
  }
};

export const getHotel = async (req, res) => {
  try {
    const getHotel = await Hotel.findById(req.params.id);
    res.status(200).json(getHotel);
  } catch (error) {
    next(new createError(401, 'Sorry not found'));
  }
};

export const getAllHotels = async (req, res) => {
  try {
    const getHotels = await Hotel.find();
    res.status(200).json(getHotels);
  } catch (error) {
    next(new createError(401, 'Sorry not found'));
  }
};
