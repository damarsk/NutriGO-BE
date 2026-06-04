import { Request, Response } from "express";
import * as service from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const user = await service.register(req.body);
    res.status(201).json({
      message: "User registered successfully",
      data: user,
    });
  } catch (err: any) {
    res
      .status(400)
      .json({ message: err.message || "Registration failed", data: null });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const result = await service.login(req.body);
    res.status(200).json({
      message: "Login successful",
      data: result,
    });
  } catch (err: any) {
    res
      .status(400)
      .json({ message: err.message || "Login failed", data: null });
  }
};

export const me = async (req: Request, res: Response) => {
  try {
    const user = await service.getMe((req as any).user.id);
    res.status(200).json({
      message: "User info fetched successfully",
      data: user,
    });
  } catch (err: any) {
    res.status(400).json({
      message: err.message || "Failed to fetch user info",
      data: null,
    });
  }
};
