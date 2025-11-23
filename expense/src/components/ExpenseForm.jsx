import {useState} from "react";

const ExpenseForm = () => {
    const [form, setForm] = useState({
        title:"",
        amount:"",
        category:"",
        date:""
    })

    return(
        <div className="text-3xl font-bold text-blue-600">
            <h1>Welcome to the Expense Form!</h1>
            <form>
                <input type="text"
                placeholder="Enter Title"
                />
            </form>
        </div>
    )
}

export default ExpenseForm;