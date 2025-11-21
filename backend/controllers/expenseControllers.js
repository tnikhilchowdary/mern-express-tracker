import Expense from "../schema/ExpenseSchema.js";

export const getExpense = async (req, res) => {
    try{
        const expenses = await Expense.find({});

        return res.status(200).json({
            message:"Fetched Expense",
            expenses:expenses
        });
    }
    catch(error){
        console.error("Error in fetching Data", error);

        return res.status(501).json({
            message:"Error in Fetching data",
            error
        });
    }
}


export const addExpenses = async (req, res) => {
    try{
        const {title, amount, category, date} = req.body;
        const expense = new Expense({
            title, amount, category, date
        });

        await expense.save();

        return res.status(200).json({
            message:"Successfully Added",
           expense:expense 
        })

    }
    catch(error){
        console.error("Error in Adding Expense", error);
        return res.status(501).json({
            message:"Error in Adding Expense"
        })
    }
}