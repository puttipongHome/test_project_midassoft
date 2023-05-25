import express from "express";
import { Request, Response } from "express";
import { sum } from "../controllers/pocker";
import { onepatient } from "../controllers/pocker";
import { sub } from "../controllers/pocker";

const router = express.Router();

router.post("/pocker", (req: Request, res: Response) => {
  sum(req, res);
});

router.post("/clock", (req: Request, res: Response) => {
  onepatient(req, res);
});

router.post("/sub", (req: Request, res: Response) => {
  sub(req, res);
});

export default router;
