import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });

    await newUser.save();
    res.status(200).send('User created');
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    console.log('here 1');
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, 'User not found!'));
    console.log('here 2');
    console.log(user.password);

    await bcrypt.compare(req.body.password, user.password, (err, result) => {
      console.log(result + '--');
      if (!result) {
        return next(createError(400, 'Wrong username or password!'));
      } else {
        const token = jwt.sign(
          { id: user._id, isAdmin: user.isAdmin },
          process.env.JWT
        );

        const { password, isAdmin, ...others } = user._doc;
        res
          .cookie('access_token', token, {
            httpOnly: true,
          })
          .status(200)
          .json(others);
      }
    });
  } catch (err) {
    next(createError(400, 'Something went wrong!'));
  }
};
