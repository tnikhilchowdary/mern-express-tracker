import mongoose from "mongoose";


const ExpenseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum:["Food", "Travel", "Shopping", "Bills", "Other"],
    },
    date:{
        type:Date,
        required:true
    }
}, {timestamps:true});

const Expense = mongoose.model("Expense", ExpenseSchema);

export default Expense;