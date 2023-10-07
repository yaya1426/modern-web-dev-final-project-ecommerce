import { Router, Request, Response } from "express";

const router = Router();

router.post("/create", (req: Request, res: Response) => {
  try {
    // TO DO: Implement creating a new order from current user's active cart
    res.status(200).send("Success!");
  } catch (err: any) {
    res.status(500).send({ error: err.message });
  }
});

export default router;
