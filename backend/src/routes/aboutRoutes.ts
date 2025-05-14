import express from "express";
import About from "../models/AboutUs";

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const aboutUs = await About.findOne();
    res.json(aboutUs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.post("/", async (req, res) => {
  try {
    const { title, description } = req.body;
    const about = new About({ title, description });
    await about.save();
    res.status(201).json(about);
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
});

export default router;
