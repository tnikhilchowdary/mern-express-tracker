import { React, useState } from "react";
import axios from "axios";

const Signup = () => {
    const [form, setForm] = useState({
        name:"",
        email:"",
        password:""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    return(
        <div>
            <h1>Welcome to The Signup Page</h1>
            <form>
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
        </div>
    )
}

export default Signup;
