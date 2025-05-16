import { Request, Response } from 'express';
import About from '../models/About';

export const getAboutInfo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const info = await About.findOne();
    if (!info) {
      return res.status(404).json({ message: 'About info not found' });
    }
    return res.json(info);
  } catch (err) {
    return res.status(500).json({ error: 'Server error' });
  }
};

export const createAboutInfo = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { title, description } = req.body;
    const about = new About({ title, description });
    await about.save();
    return res.status(201).json(about);
  } catch (err) {
    return res.status(400).json({ message: 'Invalid data' });
  }
};
