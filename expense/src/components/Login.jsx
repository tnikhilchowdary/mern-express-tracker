import React from "react";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";


const Login = () => {
    const [form, setForm] = useState({
        email:"",
        password:""
    });

    const navigate = useNavigate();
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
            navigate("/expense")
        }
        catch(error){
            console.log("Error");
            alert("Invalid Email or password");
        }
    }
    return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-xl shadow-lg w-[380px]">
      <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
        >
          Login
        </button>
      </form>

      <p className="text-sm text-center mt-4 text-gray-600">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Register here
        </Link>
      </p>
    </div>
  </div>
);

};

export default Login;
