import express from "express";
import pokerRouter from "./pocker";

const router = express.Router();

router.use("/", pokerRouter);

export default router;
