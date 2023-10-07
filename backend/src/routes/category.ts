import { Router, Request, Response } from "express";
import {
  createCategory,
  deleteCategory,
  fetchCategories,
  updateCategory,
} from "../services/category";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const data = await fetchCategories();
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ error: err?.message });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newCategory = await createCategory(req.body);
    res.status(200).json(newCategory);
  } catch (err: any) {
    res.status(400).json({ error: err?.message });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedCategory = await updateCategory(id, req.body);
    res.status(200).json(updatedCategory);
  } catch (err: any) {
    res.status(400).json({ error: err?.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedCategory = await deleteCategory(id);
    res.status(200).json(updatedCategory);
  } catch (err: any) {
    res.status(400).json({ error: err?.message });
  }
});

export default router;
