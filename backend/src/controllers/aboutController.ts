import { Request, Response } from "express";
import About from "../models/About";
import logger from "../utils/logger";

export const getAboutInfo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const about = await About.findOne().sort({ createdAt: -1 }); 
    if (!about) {
      logger.warn("No about info found");
      return res.status(404).json({ message: "About info not found" });
    }
    logger.info("Fetched latest about info");
    return res.status(200).json(about);
  } catch (err) {
    logger.error("Error fetching about info: " + err);
    return res.status(500).json({ error: "Server error" });
  }
};

export const createAboutInfo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { heading, sections } = req.body;

    await About.deleteMany();
    
    const newAbout = new About({ heading, sections });
    await newAbout.save();

    logger.info("Replaced About info with new content");
    return res.status(201).json(newAbout);
  } catch (err) {
    logger.error("Error creating about info: " + err);
    return res.status(400).json({ message: "Invalid data", error: err });
  }
};

export const deleteAboutInfo = async (req: Request, res: Response): Promise<Response> => {
  try {
    await About.deleteMany();
    logger.info("Deleted all about info");
    return res.status(200).json({ message: "About data deleted successfully." });
  } catch (error) {
    logger.error("Error deleting about info: " + error);
    return res.status(500).json({ error: "Server error while deleting about data." });
  }
};
