import { prisma } from "../config/prisma";

interface IFood {
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

export const createFood = async (data: IFood) => {
  return await prisma.food.create({
    data: {
      ...data,
    },
  });
};

export const updateFood = async (id: number, data: IFood) => {
  return await prisma.food.update({
    where: { id },
    data: {
      ...data,
    },
  });
};

export const deleteFood = async (id: number) => {
  return await prisma.food.delete({
    where: { id },
  });
};
