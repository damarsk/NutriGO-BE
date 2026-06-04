import { z } from "zod";

export const createLog = z.object({
  foodId: z.number().positive(),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  mealTime: z.enum(["BREAKFAST", "LUNCH", "DINNER", "SNACK"]),
  consumtionGram: z.number().positive(),
  totalCalories: z.number().positive(),
  totalProtein: z.number().positive(),
  totalCarbs: z.number().positive(),
  totalFat: z.number().positive(),
  totalSugar: z.number().positive(),
  totalNatrium: z.number().positive(),
});
