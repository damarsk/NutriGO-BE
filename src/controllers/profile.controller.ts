import { Request, Response } from "express";
import * as service from "../services/profile.service";

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
    name: string;
    role: string;
  };
}

export const createProfile = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
        data: null,
      });
    }

    const profile = await service.createProfile(userId, req.body);
    res.status(201).json({
      message: "Profile created successfully",
      data: profile,
    });
  } catch (err: any) {
    res
      .status(400)
      .json({ message: err.message || "Failed to create profile", data: null });
  }
};

export const getProfile = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
        data: null,
      });
    }

    const profile = await service.getProfile(userId);
    res.status(200).json({
      message: "Profile retrieved successfully",
      data: profile,
    });
  } catch (err: any) {
    res
      .status(400)
      .json({ message: err.message || "Failed to get profile", data: null });
  }
};

export const updateProfile = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        message: "User not authenticated",
        data: null,
      });
    }

    const profile = await service.updateProfile(userId, req.body);
    res.status(200).json({
      message: "Profile updated successfully",
      data: profile,
    });
  } catch (err: any) {
    res
      .status(400)
      .json({ message: err.message || "Failed to update profile", data: null });
  }
};
