import {getExpense, addExpenses, updateExpenses, deleteExpenses} from "../controllers/expenseControllers.js";
import {register} from "../controllers/userControllers.js"
import {Login} from "../controllers/userLogin.js";


import express from "express";

const router = express.Router();
router.post("/login",Login);
router.post("/register", register)
router.get("/", getExpense);
router.post("/", addExpenses);
router.put("/:id", updateExpenses)
router.delete("/:id", deleteExpenses);

export default router;