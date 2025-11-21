import {getExpense, addExpenses} from "../controllers/expenseControllers.js";

import express from "express";

const router = express.Router();

router.get("/", getExpense);
router.post("/", addExpenses);

export default router;