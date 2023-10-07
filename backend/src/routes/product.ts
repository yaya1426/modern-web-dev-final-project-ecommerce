import { Router, Request, Response } from "express";
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  updateProduct,
} from "../services/product";

const router = Router();

router.get("/category/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await fetchProducts(id);
    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ error: err?.message });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const newProduct = await createProduct(req.body);
    res.status(200).json(newProduct);
  } catch (err: any) {
    res.status(400).json({ error: err?.message });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedProduct = await updateProduct(id, req.body);
    res.status(200).json(updatedProduct);
  } catch (err: any) {
    res.status(400).json({ error: err?.message });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const updatedProduct = await deleteProduct(id);
    res.status(200).json(updatedProduct);
  } catch (err: any) {
    res.status(400).json({ error: err?.message });
  }
});

export default router;
