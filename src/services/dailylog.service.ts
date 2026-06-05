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
        }
      }
    }
  });

  return logs;
};
