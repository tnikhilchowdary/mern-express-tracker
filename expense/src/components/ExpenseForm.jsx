import {useState} from "react";
import axios from "axios";

const ExpenseForm = () => {
    const [form, setForm] = useState({
        title:"",
        amount:"",
        category:"",
        date:""
    })

    const handleChange = (e) => {
        setForm({
            ...form, [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post("http://localhost:1000/expenseroutes", form);
            console.log("Succesfully Added", response.data);
            alert("Expenses Added");
        }
        catch(error){
            console.log("Error", error);
            alert("Error Adding Expenses!");
        }
    }

    return(
        <div className="">
            <h1>Welcome to the Expense Form!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                name="title"
                placeholder="Enter Title"
                value={form.title}
                onChange={handleChange}
                />
                 <input type="number"
                name="amount"
                placeholder="Enter Amount"
                value={form.amount}
                onChange={handleChange}
                />
                <select
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    >
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Bills">Bills</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Other">Other</option>
                </select>
                <input type="date"
                name="date"
                placeholder="Enter Date"
                value={form.date}
                onChange={handleChange}
                />
                <div>
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ExpenseForm;