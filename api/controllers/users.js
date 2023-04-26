import User from '../models/User.js';

export const updateUsers = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(createError(401, 'Sorry not found'));
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json('User deleted');
  } catch (error) {
    next(createError(401, 'Sorry not found'));
  }
};

export const getUser = async (req, res) => {
  try {
    const getUser = await User.findById(req.params.id);
    res.status(200).json(getUser);
  } catch (error) {
    next(createError(401, 'Sorry not found'));
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const getUsers = await User.find();
    res.status(200).json(getUsers);
  } catch (error) {
    next(createError(401, 'Sorry not found'));
  }
};
