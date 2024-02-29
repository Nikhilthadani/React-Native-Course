import express from "express";
import appRouter from "./src/routes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api", appRouter);

app.listen(5000, () => console.log("Server Open"));
