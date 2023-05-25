import express from "express";
import { Request, Response } from "express";
import controller from "../controllers/pocker";

const router = express.Router();

router.post("/pocker", (req: Request, res: Response) => {
  controller.pocker.sum(req, res);
});

router.post("/clock", (req: Request, res: Response) => {
  controller.clock.onepatient(req, res);
});

router.post("/sub", (req: Request, res: Response) => {
  controller.substring.sub(req, res);
});

export default router;
