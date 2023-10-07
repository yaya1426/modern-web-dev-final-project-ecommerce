import { Schema, model } from "mongoose";
import Category from "../types/category";

const categorySchema = new Schema<Category>(
  {
    title: { type: String, required: true, unique: true },
    image: { type: String, required: true },
  },
  { versionKey: false }
);

const CategoryModel = model("Category", categorySchema);

export default CategoryModel;
