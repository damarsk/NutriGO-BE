import { prisma } from "../config/prisma";

interface ICreateLog {
  userId: number;
  foodId: number;
  date: string;
  mealTime: "BREAKFAST" | "LUNCH" | "DINNER" | "SNACK";
  consumtionGram: number;
  totalCalories: number;
  totalProtein?: number;
  totalCarbs?: number;
  totalFat?: number;
  totalSugar?: number;
  totalNatrium?: number;
}

export const createLog = async (data: ICreateLog) => {
  const log = await prisma.dailyLog.create({
    data: {
      ...data,
      date: new Date(data.date),
      totalProtein: data.totalProtein ?? 0,
      totalCarbs: data.totalCarbs ?? 0,
      totalFat: data.totalFat ?? 0,
      totalSugar: data.totalSugar ?? 0,
      totalNatrium: data.totalNatrium ?? 0,
    },
  });

  return log;
};

export const getLogsByUserIdAndDate = async (userId: number, date: string) => {
  const logDate = new Date(date);
  const startOfDay = new Date(logDate);
  startOfDay.setHours(0, 0, 0, 0);
  const endOfDay = new Date(logDate);
  endOfDay.setHours(23, 59, 59, 999);

  const logs = await prisma.dailyLog.findMany({
    where: {
      userId,
      date: {
        gte: startOfDay,
        lte: endOfDay,
      },
    },
    include: {
      food: {
        select: {
          name: true,
        },
      },
    },
  });

  return logs;
};

export const updateLogById = async (
  logId: number,
  userId: number,
  data: { consumtionGram: number },
) => {
  const log = await prisma.dailyLog.findUnique({
    where: { id: logId },
  });

  if (!log || log.userId !== userId) {
    throw new Error("Log not found or unauthorized");
  }

  return await prisma.dailyLog.update({
    where: { id: logId },
    data: {
      consumtionGram: data.consumtionGram,
    },
  });
};

export const deleteLogById = async (logId: number, userId: number) => {
  const log = await prisma.dailyLog.findUnique({
    where: { id: logId },
  });

  if (!log || log.userId !== userId) {
    throw new Error("Log not found or unauthorized");
  }

  return await prisma.dailyLog.delete({
    where: { id: logId, userId },
  });
};
