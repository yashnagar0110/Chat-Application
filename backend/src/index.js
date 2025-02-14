import express from "express";
import dotenv from "dotenv";

import {connectDB} from "./lib/db.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use("/api/auth",authRoute);
app.use(express.json());

app.listen(PORT,()=>{
    console.log("server is listening on port : " + PORT);
    connectDB();
})
