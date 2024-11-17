import express, { Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import mongoose from "mongoose";
import authRoutes from "./routes/auth";
import userRoutes from "./routes/register";
import path from "path";


const app = express()
app.use(express.json())
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
    })
);
app.use(express.static(path.join(__dirname, "../../frontend/dist")))
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)

app.listen(7000, () => {
    console.log("server started on localhost:7000");
})