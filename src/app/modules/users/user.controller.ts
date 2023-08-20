import { Request, Response } from 'express';
import userService from './users.service';

const createUser = async (req: Request, res: Response) => {
    try {
        const { user } = req.body;
        const result = await userService.createUser(user);

        res.status(200).json({
            sucess: true,
            message: 'User Created Successfully.',
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            sucess: false,
            message: 'Failed to Create user.',
        });
    }
};

export default {
    createUser,
};
