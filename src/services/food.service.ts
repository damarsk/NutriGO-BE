import { prisma } from "../config/prisma";

interface ICreateFood {
  name: string;
  calories?: number | null;
  carbs?: number | null;
  fat?: number | null;
  sugar?: number | null;
  natrium?: number | null;
}

export const getAllFoods = async () => {
  return await prisma.food.findMany();
};

export const createFood = async (data: ICreateFood) => {
  return await prisma.food.create({
    data: {
      name: data.name,
      calories: data.calories || null,
      carbs: data.carbs || null,
      fat: data.fat || null,
      sugar: data.sugar || null,
      natrium: data.natrium || null,
    },
  });
};
