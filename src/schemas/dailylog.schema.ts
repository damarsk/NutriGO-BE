import { z } from "zod";

export const createLog = z.object({
  foodId: z.number().positive(),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid date format",
  }),
  mealTime: z.enum(["BREAKFAST", "LUNCH", "DINNER", "SNACK"]),
  consumtionGram: z.number().min(0, "Consumption gram must be a non-negative number"),
  totalCalories: z.number().min(0, "Total calories must be a non-negative number"),
  totalProtein: z.number().min(0, "Total protein must be a non-negative number").optional(),
  totalCarbs: z.number().min(0, "Total carbs must be a non-negative number").optional(),
  totalFat: z.number().min(0, "Total fat must be a non-negative number").optional(),
  totalSugar: z.number().min(0, "Total sugar must be a non-negative number").optional(),
  totalNatrium: z.number().min(0, "Total sodium must be a non-negative number").optional(),
});
