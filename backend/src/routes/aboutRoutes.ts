import express from "express";
import {
  createAboutInfo ,
  getAboutInfo,
} from "../controllers/aboutController";

const router = express.Router();

router.post("/", createAboutInfo);
router.get("/", getAboutInfo); 

export default router;
