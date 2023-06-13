import User from '../models/User.js';
import { handleError } from '../error.js';
import Post from '../models/Post.js';


export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
};

export const update = async (req, res, next) => {
    const user = await User.findById(req.params.id);
    if(req.params.id === user._id) {
        try{
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            },
            {
                new: true
            });
            res.status(200).json(updatedUser);
        }catch(err) {
            next(err);
        }
    } else {
        return next(handleError(403, "You can only update your own account"));
    }
};

export const deleteUser = async (req, res, next) => {
    if(req.params.id === req.user.id) {
        try{
            await User.findByIdAndDelete(req.params.id);
            await Post.deleteMany({ userId: req.params.id });
            res.status(200).json('User deleted successfully');
        }catch(err) {
            next(err);
        }
    } else {
        return next(handleError(403, "You can only delete your own account"));
    }
};

export const follow = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.id);

        if(!user.followers.includes(req.body.id)) {
            user.followers.push(req.body.id);
            await user.save();
            currentUser.following.push(req.params.id);
            await currentUser.save();
        }
        else {
            res.status(403)
            .json('You are already following this user');
        }
        res.status(200).json('User followed successfully');
    }catch(err) {
        next(err);
    }
}

export const unfollow = async (req, res, next) => {
    try{
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.id);

        if(user.followers.includes(req.body.id)) {
            user.followers.pull(req.body.id);
            await user.save();
            currentUser.following.pull(req.params.id);
            await currentUser.save();
        }
        else {
            res.status(403)
           .json('You are not following this user');
        }
        res.status(200).json('User unfollowed successfully');
    }catch(err) {
        next(err);
    }
};