import { Router, Request, Response } from "express";
import { PromptGPTChat } from "../services/chat";

const router = Router();

router.post("/prompt", async (req: Request, res: Response) => {
  try {
    const { query } = req.body;
    const response = await PromptGPTChat(query);
    res.status(200).send(response);
  } catch (err: any) {
    res.status(500).send({ error: err.message });
  }
});

export default router;
