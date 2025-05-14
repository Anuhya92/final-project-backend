
import { Request, Response } from 'express';
import About from '../models/AboutUs';

export const getAboutUsInfo = async (req: Request, res: Response) => {
  try {
    const info = await About.findOne();
    if (!info) return res.status(404).json({ message: 'Aboutus info not found' });
    res.json(info);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
