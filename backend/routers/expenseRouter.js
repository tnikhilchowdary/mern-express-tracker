import {getExpense} from "../controllers/expenseControllers.js";

import express from "express";

const router = express.Router();

router.get("/", getExpense);