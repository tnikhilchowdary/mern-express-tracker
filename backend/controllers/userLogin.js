import User from "../schema/userSchema.js";

export const Login = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        const loginData = await User.findOne({});
        if(!login)
    }
    catch(error){
        console.error("Error in Logging in");
        return res.status()
    }
}