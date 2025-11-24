import User from "../schema/userSchema.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message:"Email Already Exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name, 
            email,
            password:hashedPassword
        });

        await user.save();


        return res.status(201).json({
            message:"User Registered Succesfully",
            user
        })
    }
    catch(error){
        console.error("Error", error);
        return res.status(501).json({message:"Error in Registering user",
            error
        });
    }
}