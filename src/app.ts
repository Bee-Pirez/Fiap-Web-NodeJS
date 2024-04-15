// src/app.ts

import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

import express from "express";
import { router } from "./routes";

const app = express();

// Habilita o CORS para todas as origens
app.use(cors());

app.use(express.json());

app.use(router);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log("Servidor rodando!");
});
