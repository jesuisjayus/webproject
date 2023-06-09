import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { handleError } from '../error.js';

export const signup = async (req, res, next) => {
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({...req.body, password: hash});

        const token = jwt.sign({ id: newUser._id }, process.env.JWT);

        newUser.set('access_token', token);
        await newUser.save();

        console.log(newUser);

        const {password, ...otherDatas} = newUser._doc;

        res.cookie('access_token', token, {
            httpOnly: false
        })
        .status(200)
        .json({ ...newUser._doc, access_token: token });
    } catch(err) {
        next(err);
    }
};

export const signin = async (req, res, next) => {
    try{
        const user = await User.findOne({ userName: req.body.userName });
        if(!user) {
            return next(handleError(404, 'User not found'));
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);

        if(!validPassword) {
            return next(handleError(400, 'Invalid password'));
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT);
        const {password,...otherDatas} = user._doc;

        res.cookie('access_token', token, {
            httpOnly: false
        })
        .status(200)
        .json({ ...user._doc, access_token: token });
    } catch(err) {
        next(err);
    }
};