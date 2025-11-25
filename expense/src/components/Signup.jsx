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
    return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-xl shadow-lg w-[380px]">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Create an Account
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg bg-gray-50 
                     focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg bg-gray-50 
                     focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg bg-gray-50 
                     focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg 
                     font-medium transition"
        >
          Signup
        </button>
      </form>

      <p className="text-sm text-center mt-4 text-gray-600">
        Already have an account?{" "}
        <Link to="/" className="text-blue-600 hover:underline">
          Login here
        </Link>
      </p>
    </div>
  </div>
);

}

export default Signup;
