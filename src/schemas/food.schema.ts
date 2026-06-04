import { z } from "zod";

export const createFoodSchema = z.object({
  name: z.string({ error: "Food name is required" }),
  calories: z.number({ error: "Calories must be a number" }).nullable(),
  protein: z.number({ error: "Protein must be a number" }).nullable(),
  carbs: z.number({ error: "Carbs must be a number" }).nullable(),
  fat: z.number({ error: "Fat must be a number" }).nullable(),
  sugar: z.number({ error: "Sugar must be a number" }).nullable(),
  natrium: z.number({ error: "Natrium must be a number" }).nullable(),
});
export const updatefoodSchema = createFoodSchema.partial();
