import { Router, Request, Response } from "express";
import { createUser, getUserProfile } from "../services/user";
import {
  ClerkExpressRequireAuth,
  RequireAuthProp,
  StrictAuthProp,
} from "@clerk/clerk-sdk-node";

// Used to allow the Clerk request.auth to be read in typescript
declare global {
  namespace Express {
    interface Request extends StrictAuthProp {}
  }
}
const router = Router();

router.get(
  "/profile",
  ClerkExpressRequireAuth(),
  async (req: RequireAuthProp<Request>, res: Response) => {
    try {
      const userProfile = await getUserProfile(req.auth.userId);
      // TO DO: Implement retrive user profile after validating clerk session
      res.status(200).send({ user: userProfile });
    } catch (err: any) {
      res.status(500).send({ error: err.message });
    }
  }
);

router.post(
  "/create",
  ClerkExpressRequireAuth(),
  async (req: RequireAuthProp<Request>, res: Response) => {
    try {
      const newUser = await createUser(req.auth.userId);
      // TO DO: Implement CLERK user creation after successful signup
      res.status(200).send({ newUser });
    } catch (err: any) {
      res.status(500).send({ error: err.message });
    }
  }
);

export default router;
