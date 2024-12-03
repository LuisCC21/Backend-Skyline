import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import clientsRoutes from "./routes/clientsRoutes.js";
import salesRoutes from "./routes/salesRoutes.js";

const app = express();
app.use(express.json());

dotenv.config();

connectDb();

app.use(cors());

// Routing
app.use("/api/clients", clientsRoutes);
app.use("/api/sales", salesRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`servidor iniciado en el puerto ${PORT}`);
});
