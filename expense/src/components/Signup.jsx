import { React, useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [form, setForm] = useState({
        name:"",
        email:"",
        password:""
    });
    
    const navigate = useNavigate();
    const handleChange = async (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:1000/expenseroutes/register", form)
            alert("Signup Succesfully")
            navigate("/expense");
        }
        catch(error){
            console.log("Error in Submiting form", error);
        }
    }


    return(
        <div>
            <h1>Welcome to The Signup Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="name"
                name="name"
                placeholder="Enter Name"
                value={form.name}
                onChange={handleChange}
                />
                <input type="email"
                name="email"
                placeholder="Enter Email"
                value={form.email}
                onChange={handleChange}
                />
                <input type="password"
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                />
                <button>Signup</button>
            </form>
            <p>If you have already account please <Link to="/">Login here</Link></p>
        </div>
    )
}

export default Signup;
