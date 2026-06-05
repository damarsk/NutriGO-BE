import { z } from "zod";

export const createLog = z.object({
  foodId: z.number().positive(),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  mealTime: z.enum(["BREAKFAST", "LUNCH", "DINNER", "SNACK"]),
  consumtionGram: z.number().positive(),
  totalCalories: z.number().positive(),
  totalProtein: z.number().positive().optional(),
  totalCarbs: z.number().positive().optional(),
  totalFat: z.number().positive().optional(),
  totalSugar: z.number().positive().optional(),
  totalNatrium: z.number().positive().optional(),
});
