import { useState } from "react";
import axios from "axios";

const ExpenseForm = () => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    category: "",
    date: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:1000/expenseroutes", form);
      console.log("Succesfully Added", response.data);
      alert("Expenses Added");
    } catch (error) {
      console.log("Error", error);
      alert("Error Adding Expenses!");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-white p-8 shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Welcome to the Expense Form!
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Title */}
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          value={form.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        {/* Amount */}
        <input
          type="number"
          name="amount"
          placeholder="Enter Amount"
          value={form.amount}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        {/* Category */}
        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Bills">Bills</option>
          <option value="Shopping">Shopping</option>
          <option value="Other">Other</option>
        </select>

        {/* Date */}
        <input
          type="date"
          name="date"
          placeholder="Enter Date"
          value={form.date}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 shadow-md transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
