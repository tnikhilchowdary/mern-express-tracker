import {getExpense, addExpenses, updateExpenses, deleteExpenses} from "../controllers/expenseControllers.js";
import {register} from "../controllers/userControllers.js"
import express from "express";

const router = express.Router();

router.post("/user", register)
router.get("/", getExpense);
router.post("/", addExpenses);
router.put("/:id", updateExpenses)
router.delete("/:id", deleteExpenses);

export default router;