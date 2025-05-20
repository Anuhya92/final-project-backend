import express from "express";
import About from "../models/About";

import {
  createAboutInfo ,
  getAboutInfo,
  deleteAboutInfo
} from "../controllers/aboutController";

const router = express.Router();

router.get("/", getAboutInfo); 
router.post("/", createAboutInfo);
router.delete("/", deleteAboutInfo);


export default router;
