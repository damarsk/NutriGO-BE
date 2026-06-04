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

export const updateFood = async (req: Request, res: Response) => {
  try {
    const food = await service.updateFood(+req.params.id!, req.body);
    res.status(200).json({
      message: "Food updated successfully",
      data: food,
    });
  } catch (err: any) {
    res
      .status(400)
      .json({ message: err.message || "Failed to update food", data: null });
  }
};

export const deleteFood = async (req: Request, res: Response) => {
  try {
    const food = await service.deleteFood(+req.params.id!);
    res.status(200).json({
      message: "Food deleted successfully",
      data: food,
    });
  } catch (err: any) {
    res
      .status(400)
      .json({ message: err.message || "Failed to delete food", data: null });
  }
};
