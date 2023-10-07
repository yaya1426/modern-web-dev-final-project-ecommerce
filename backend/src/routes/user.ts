import { Router, Request, Response } from "express";
import { registerUser, loginUser } from "../services/user";

const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const jwt = await loginUser({ email, password });
    if (!jwt) {
      return res.status(400).send("Incorrect email or password");
    }
    res.status(200).send({ jwt });
  } catch (err: any) {
    res.status(500).send({ error: err.message });
  }
});

router.post("/register", async (req: Request, res: Response) => {
    try {
        const { fullName, phoneNumber, email, password } = req.body;
        const jwt = await registerUser({ fullName, phoneNumber, email, password });
        if (!jwt) {
          return res.status(400).send("Incorrect email or password");
        }
        res.status(200).send({ jwt });
      } catch (err: any) {
        res.status(500).send({ error: err.message });
      }
});

export default router;