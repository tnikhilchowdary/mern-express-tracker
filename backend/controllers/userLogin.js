import User from "../schema/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "User Not Found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Incorrect Password"
            });
        }

        const token = jwt.sign(
            {id:user._id},
            process.env.JWT_SECRET,
            {expiresIn : process.env.JWT_EXPIRES},
        )

        return res.status(200).json({
            message: "Login Successfully",
            token,
            user
        });

    } catch (error) {
        console.error("Error in Logging in", error);
        return res.status(500).json({
            message: "Error in Login",
            error
        });
    }
};
