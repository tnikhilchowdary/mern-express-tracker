import {getExpense, addExpenses, updateExpenses, deleteExpenses} from "../controllers/expenseControllers.js";

import express from "express";

const router = express.Router();

router.get("/", getExpense);
router.post("/", addExpenses);
router.put("/:id", updateExpenses)
router.delete("/:id", deleteExpenses);

export default router;