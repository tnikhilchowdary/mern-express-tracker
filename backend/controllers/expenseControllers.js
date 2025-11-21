import Expense from "../schema/ExpenseSchema.js";

export const getExpense = async (req, res) => {
    try{
        const expenses = await Expense.find({});

        return res.status(200).json({
            message:"Fetched Expense",
            expenses
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