import { Router, Request, Response } from "express";

const router = Router();

router.post("/prompt", async (req: Request, res: Response) => {
  try {
    // TO DO: Prompt ChatGPT OpenAI
    res.status(200).send("Success!");
  } catch (err: any) {
    res.status(500).send({ error: err.message });
  }
});
