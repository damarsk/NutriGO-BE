import { Request, Response } from "express";
import * as service from "../services/food.service";

export const getAllFoods = async (req: Request, res: Response) => {
  try {
    const foods = await service.getAllFoods();
    res.status(200).json({
      message: "Foods retrieved successfully",
      data: foods,
    });
  } catch (err: any) {
    res
      .status(400)
      .json({ message: err.message || "Failed to get foods", data: null });
  }
};

export const createFood = async (req: Request, res: Response) => {
  try {
    const food = await service.createFood(req.body);
    res.status(201).json({
      message: "Food created successfully",
      data: food,
    });
  } catch (err: any) {
    res
      .status(400)
      .json({ message: err.message || "Failed to create food", data: null });
  }
};
