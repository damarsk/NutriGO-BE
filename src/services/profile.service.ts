import { prisma } from "../config/prisma";

interface IUpdateProfile {
  age: number;
  height: number;
  weight: number;
  activityLevel: "SEDENTARY" | "MODERATE" | "VERY_ACTIVE";
  gender: "MALE" | "FEMALE";
  goal: "BULKING" | "CUTTING" | "MAINTAINING";
  weightGoal: number;
}

interface User {
  id: number;
  fullName: string;
  role: string;
}

export const getProfile = async (userId: number) => {
  return await prisma.profile.findUnique({
    where: { userId: userId },
  });
};

export const createProfile = async (userId: number, data: IUpdateProfile) => {
  return await prisma.profile.create({
    data: {
      userId: userId,
      age: data.age,
      gender: data.gender,
      height: data.height,
      weight: data.weight,
      activityLevel: data.activityLevel,
      goal: data.goal,
      weightGoal: data.weightGoal,
    },
  });
};

export const updateProfile = async (userId: number, data: IUpdateProfile) => {
  return await prisma.profile.update({
    where: { userId: userId },
    data: {
      age: data.age,
      height: data.height,
      weight: data.weight,
      activityLevel: data.activityLevel,
    },
  });
};
