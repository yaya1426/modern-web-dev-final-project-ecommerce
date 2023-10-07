import { Router, Request, Response } from "express";
import { createUser, getUserProfile } from "../services/user";

const router = Router();

router.get("/profile", async (req: Request, res: Response) => {
  try {
    // TO DO: Implement retrive user profile after validating clerk session
    res.status(200).send("Success!");
  } catch (err: any) {
    res.status(500).send({ error: err.message });
  }
});

router.post("/create", async (req: Request, res: Response) => {
  try {
    // TO DO: Implement CLERK user creation
    res.status(200).send("Success!");
  } catch (err: any) {
    res.status(500).send({ error: err.message });
  }
});

export default router;
