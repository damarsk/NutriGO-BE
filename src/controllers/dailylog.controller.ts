import { Request, Response } from "express";
import * as service from "../services/dailylog.service";

interface AuthenticatedRequest extends Request {
  user?: {
    id: number;
  };
}

interface ICreateLog {
  foodId: number;
  date: string;
  mealTime: "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK";
  consumtionGram: number;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  totalSugar: number;
  totalNatrium: number;
}

export const createLog = async (req: Request, res: Response) => {
  try {
    const authReq = req as AuthenticatedRequest;
    const log = await service.createLog({
      ...(req.body as Omit<ICreateLog, "date">),
      userId: authReq.user!.id,
      date: req.body.date as string,
    });
    res.status(201).json({
      message: "Log created successfully",
      data: log,
    });
  } catch (err: any) {
    res
      .status(400)
      .json({ message: err.message || "Failed to create log", data: null });
  }
};

export const getLogByDate = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  try {
    const logs = await service.getLogsByUserIdAndDate(
      req.user!.id,
      req.params.date as string,
    );
    res.status(200).json({
      message: "Logs retrieved successfully",
      data: logs,
    });
  } catch (err: any) {
    res
      .status(400)
      .json({ message: err.message || "Failed to retrieve logs", data: null });
  }
};

export const deleteLogById = async (
  req: AuthenticatedRequest,
  res: Response,
) => {
  try {
    const log = await service.deleteLogById(
      Number(req.params.id),
      req.user!.id,
    );
    res.status(200).json({
      message: "Log deleted successfully",
      data: log,
    });
  } catch (err: any) {
    res
      .status(400)
      .json({ message: err.message || "Failed to delete log", data: null });
  }
};
