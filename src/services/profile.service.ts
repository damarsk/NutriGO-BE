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
  let bmr = 0;
  let tdee = 0;
  let calorieGoal = 0;

  if (data.gender === "MALE") {
    bmr = 10 * data.weight + 6.25 * data.height - 5 * data.age + 5;
  } else {
    bmr = 10 * data.weight + 6.25 * data.height - 5 * data.age - 161;
  }

  if (data.activityLevel === "SEDENTARY") {
    tdee = bmr * 1.2;
  } else if (data.activityLevel === "MODERATE") {
    tdee = bmr * 1.55;
  } else if (data.activityLevel === "VERY_ACTIVE") {
    tdee = bmr * 1.725;
  }

  calorieGoal = tdee;
  if (data.goal === "BULKING") {
    calorieGoal += 500;
  } else if (data.goal === "CUTTING") {
    calorieGoal -= 500;
  }

  let proteinGoal = data.weight * 2.2;
  let fatGoal = (calorieGoal * 0.25) / 9;
  let carbGoal = (calorieGoal - proteinGoal * 4 - fatGoal * 9) / 4;

  calorieGoal = Math.round(calorieGoal);
  proteinGoal = Math.round(proteinGoal);
  fatGoal = Math.round(fatGoal);
  carbGoal = Math.round(carbGoal);

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
      calorieGoal: calorieGoal,
      proteinGoal: proteinGoal,
      fatGoal: fatGoal,
      carbGoal: carbGoal,
    },
  });
};

export const updateProfile = async (userId: number, data: IUpdateProfile) => {
  return await prisma.profile.update({
    where: { userId: userId },
    data: {
      ...data,
    },
  });
};
