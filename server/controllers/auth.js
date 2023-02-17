import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

import users from '../models/auth.js'
//const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1hr' });

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existinguser = await users.findOne({ email });
        if (existinguser)
        {
            return res.status(404).json({message:'User already exists.'})
        }
        
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = await users.create({ name, email, password: hashedPassword })
        const token = jwt.sign({ email: newUser.email, id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1hr' });
        res.status(200).json({result:newUser,token})

    } catch (error)
    {
        res.status(500).json("Something went wrong...")
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existinguser = await users.findOne({ email });
        if (!existinguser)
        {
            return res.status(404).json({message:"User doesn't exist."})
        }

        const isPasswordCrt = await bcrypt.compare(password, existinguser.password)
        
        if (!isPasswordCrt)
        {
            return res.status(400).json({message:'Invalid credentials'})
        }

        const token = jwt.sign({ email: existinguser.email, id: existinguser._id },  process.env.JWT_SECRET, { expiresIn: '1hr' });
        res.status(200).json({result:existinguser,token})

    } catch (error)
    {
        res.status(500).json("Something went wrong...")
    }
}

export const forgotPassword = async (req, res) => {
    const { email } = req.body;

    try {
        const oldUser = await users.findOne({ email });

        if (!oldUser)
        {
            return res.status(404).json({message:"User doesn't exist."})
        }

        const secret = JWT_SECRET + oldUser.password;
        const token = jwt.login({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: '5m' });

        const link = `https://stack-overflow.herokuapp.com/reset-password/${oldUser._id}/${token}`;
        console.log(link)

    } catch (error) {
        
    }
}

export const resetPassword = async (req, res) => {
    const { id, token } = req.params;
    console.log(req.params);
}