import { z } from "zod";

export const createProfileSchema = z.object({
  age: z.number({ error: "Age must be a positive integer" }).int().positive(),
  height: z.number({ error: "Height must be a positive number" }).positive(),
  weight: z.number({ error: "Weight must be a positive number" }).positive(),
  gender: z.enum(["MALE", "FEMALE"], { error: "Invalid gender" }),
  activityLevel: z.enum(["SEDENTARY", "MODERATE", "VERY_ACTIVE"], {
    error: "Invalid activity level",
  }),
  goal: z.enum(["BULKING", "CUTTING", "MAINTAINING"], {
    error: "Invalid goal",
  }),
  weightGoal: z
    .number({ error: "Weight goal must be a positive number" })
    .positive(),
});
export const updateProfileSchema = z.object({
  age: z
    .number({ error: "Age must be a positive integer" })
    .int()
    .positive()
    .optional(),
  height: z
    .number({ error: "Height must be a positive number" })
    .positive()
    .optional(),
  weight: z
    .number({ error: "Weight must be a positive number" })
    .positive()
    .optional(),
  gender: z.enum(["MALE", "FEMALE"], { error: "Invalid gender" }).optional(),
  activityLevel: z
    .enum(["SEDENTARY", "MODERATE", "VERY_ACTIVE"], {
      error: "Invalid activity level",
    })
    .optional(),
  goal: z
    .enum(["BULKING", "CUTTING", "MAINTAINING"], {
      error: "Invalid goal",
    })
    .optional(),
  weightGoal: z
    .number({ error: "Weight goal must be a positive number" })
    .positive()
    .optional(),
});
