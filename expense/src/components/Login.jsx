import React from "react";
import {useState} from "react";
import axios from "axios";

const Login = () => {
    const [form, setForm] = useState({
        email:"",
        password:""
    });


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const res = await axios.post("http://localhost:1000/expenseroutes/login", form);
            alert("login Succesfully");
        }
        catch(error){
            console.log("Error");
            alert("Invalid Email or password");
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;
