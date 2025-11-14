
import express from "express";
import cors from "cors";
import purchasesRoutes from "./routes/purchases.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/purchases", purchasesRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
