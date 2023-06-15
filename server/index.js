import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/users.js";
import authRoutes from "./routes/auths.js";
import postRoutes from "./routes/posts.js";
import cors from "cors";


const app = express();
dotenv.config();



const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {console.log("Connected to MongoDB");
        })
        .catch((err) => {
            throw err
        });
};

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);


app.listen(8000, () => {
    connect();
    console.log("Listening on port 8000");
});