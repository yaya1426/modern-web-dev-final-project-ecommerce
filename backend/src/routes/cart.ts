import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  try {
    // TO DO: Retrive user's active cart.
    res.status(200).send("Success!");
  } catch (err: any) {
    res.status(500).send({ error: err.message });
  }
});

router.post("/add", (req: Request, res: Response) => {
  try {
    // TO DO: Create a cart Item from product and add it to current active cart.
    res.status(200).send("Success!");
  } catch (err: any) {
    res.status(500).send({ error: err.message });
  }
});

router.put("/:id", (req: Request, res: Response) => {
  try {
    // TO DO: Update current cartItem product by product id in current active cart.
    res.status(200).send("Success!");
  } catch (err: any) {
    res.status(500).send({ error: err.message });
  }
});

router.delete("/:id", (req: Request, res: Response) => {
  try {
    // TO DO: Remove cartItem by productId from current active cart.
    res.status(200).send("Success!");
  } catch (err: any) {
    res.status(500).send({ error: err.message });
  }
});

export default router;
