import {getExpense, addExpenses, updateExpenses, deleteExpenses} from "../controllers/expenseControllers.js";
import {register} from "../controllers/userControllers.js"
import {Login} from "../controllers/userLogin.js";
import {auth} from "..//middleware/auth.js";


import express from "express";

const router = express.Router();
router.post("/login",Login);
router.post("/register", register)
router.get("/", auth, getExpense);
router.post("/", auth, addExpenses);
router.put("/:id", auth, updateExpenses)
router.delete("/:id", auth, deleteExpenses);

export default router;