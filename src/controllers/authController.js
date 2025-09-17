import * as authService from '../services/auth.service.js';

export async function register(req, res, next) {
  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({ message: 'User registered',  user });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  try {
    const data = await authService.loginUser(req.body);
    res.status(200).json({ message: 'Login success', data });
  } catch (error) {
    next(error);
  }
}

export async function refreshToken(req, res, next) {
  try {
    const { refreshToken } = req.body;
    const tokens = await authService.refreshAccessToken(refreshToken);
    res.status(200).json({ message: 'Token refreshed',  tokens });
  } catch (error) {
    next(error);
  }
}