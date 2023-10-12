import CategoryModel from "../models/category";
import ProductModel from "../models/product";
import Product from "../types/product";

export const fetchLatestProducts = async () => {
  return await ProductModel.find().sort({ createdAt: -1 });
};

export const fetchProducts = async (categoryId: string) => {
  return await ProductModel.find({ category: categoryId }).populate("category");
};

export const fetchProductById = async (id: string) => {
  return await ProductModel.findById(id).populate("category");
};

export const createProduct = async (data: Product) => {
  // TO DO: Create slug from title before saving it
  const result = new ProductModel(data);
  await result.save();
  return result;
};

export const updateProduct = async (id: string, data: Product) => {
  const result = await ProductModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

export const deleteProduct = async (id: string) => {
  await ProductModel.findByIdAndDelete(id);
};
