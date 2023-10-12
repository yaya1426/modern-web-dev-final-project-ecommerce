import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import categoryRoutes from "./routes/category";
import productRoutes from "./routes/product";
import userRoutes from "./routes/user";
import cartRoutes from "./routes/cart";
import orderRoutes from "./routes/order";
import chatRoutes from "./routes/chat";

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json()); // Add this line to enable JSON parsing in the request body
app.use(cors({ origin: process.env.FRONTEND_URL }));

// DB Connection (database name: meem_db)
mongoose
  .connect(process.env.DATABASE_URL || "")
  .then(() => console.log("Connected to DB!"))
  .catch((err) => console.log("Connection Error!", err));

// Routers
app.use("/category", categoryRoutes);
app.use("/product", productRoutes);
app.use("/user", userRoutes);
app.use("/cart", cartRoutes);
app.use("/order", orderRoutes);
app.use("/chat", chatRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
