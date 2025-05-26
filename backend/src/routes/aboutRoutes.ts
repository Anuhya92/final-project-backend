import express from "express";
import {
  createAboutInfo,
  getAboutInfo,
  deleteAboutInfo,
} from "../controllers/aboutController";
import { asyncHandler } from "../utils/asyncHandler";

const router = express.Router();

router.get("/", asyncHandler(getAboutInfo));
router.post("/", asyncHandler(createAboutInfo));
router.delete("/", asyncHandler(deleteAboutInfo));

export default router;
