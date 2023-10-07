import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import categoryRoutes from "./routes/category";
import productRoutes from "./routes/product";
import userRoutes from "./routes/user";

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use(cors({ origin: process.env.FRONTEND_URL }));

// DB Connection
mongoose
  .connect(process.env.DATABASE_URL || "")
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log("Connection Error!", err));

// Routers
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
