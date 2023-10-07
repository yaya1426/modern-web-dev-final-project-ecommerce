import ProductModel from "../models/product";
import Product from "../types/product";

export const fetchProducts = async () => {
  return await ProductModel.find().populate("category");
};

export const fetchProductById = async (id: string) => {
  return await ProductModel.findById(id);
};

export const createProduct = async (data: Product) => {
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