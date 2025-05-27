import express, { Request, Response } from 'express';

const router = express.Router();


router.post('/login', async (req: Request, res: Response) => {

  res.send('Login route');
});

router.post('/register', async (req: Request, res: Response) => {

  res.send('Register route');
});

export default router;

