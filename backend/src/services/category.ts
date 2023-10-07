import CategoryModel from "../models/category";
import Category from "../types/category";

export const fetchCategories = async () => {
  return await CategoryModel.find();
};

export const fetchCategoryById = async (id: string) => {
  return await CategoryModel.findById(id);
};

export const createCategory = async (data: Category) => {
  const result = new CategoryModel(data);
  await result.save();
  return result;
};

export const updateCategory = async (id: string, data: Category) => {
  data.
  const result = await CategoryModel.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

export const deleteCategory = async (id: string) => {
  await CategoryModel.findByIdAndDelete(id);
};
