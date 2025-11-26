import Expense from "../schema/ExpenseSchema.js";

export const getExpense = async (req, res) => {
    try{
        const expenses = await Expense.find({user:req.userId});

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
            title, amount, category, date, user:req.userId
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


export const updateExpenses = async (req, res) => {
    try{
        const {id} = req.params;
        const updateData = req.body;
        const updatedExpenses = await Expense.findByIdAndUpdate(
            id, 
            updateData,
            {new:true}
        );

        if(!updatedExpenses){
            return res.status(404).json({message:"Expense Not Found"});
        }

        return res.status(200).json({
            message:"Updated Succesfully",
            updatedExpenses
        })
    }
    
    catch(error){
        console.log("Error in Updating Expenses", error);
        return res.status(501).json({message:"Error in Updating"});
    }
}


export const deleteExpenses = async (req, res) => {
    try{
        const {id} = req.params;
        const deleteExpenses = await Expense.findByIdAndUpdate(id, 
            {new:true}
        )
        if(!deleteExpenses){
            return res.status(201).json({
                message:"Data not founded to delete"
            })
        }

        return res.status(200).json({
            message:"Deleted Succesfully"
        })
    }
    catch(error){
        console.error("Error in Deleting Code Code");
        return res.status(501).json({
            message:"Error in Deleting Code"
        })
    }
}