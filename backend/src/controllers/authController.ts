import { Request, Response } from 'express';


export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    console.log('📤 Registering user:', { name, email });

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error('❌ Register error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    console.log('📤 Logging in user:', { email });
   
    res.status(200).json({
      message: 'Login successful!',
      token: 'mock-jwt-token',
      user: { email, name: 'Mock User' },
    });
  } catch (error) {
    console.error('❌ Login error:', error);
    res.status(500).json({ message: 'Login failed' });
  }
};
