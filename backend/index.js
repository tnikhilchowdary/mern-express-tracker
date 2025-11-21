import express from "express";
import dotenv from "dotenv";
import {connectDb} from "./db/connectDb.js";
import expense from "./routers/expenseRouter.js"


dotenv.config();
connectDb();

const app = express();
app.use("/expenseroutes", expense);
app.get("/", (req, res) => {
    res.send("NodeJs conencted");
})

app.listen(process.env.PORT, () => {
    console.log("PORT is running")
})