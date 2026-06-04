import { Router } from "express";
import * as controller from "../controllers/food.controller";
import { validate } from "../middlewares/validation.middleware";
import { createFoodSchema } from "../schemas/food.schema";
import { verifyToken } from "../middlewares/authentication.middleware";

const router = Router();

router.get("/", verifyToken, controller.getAllFoods);
router.post(
  "/",
  verifyToken,
  validate(createFoodSchema),
  controller.createFood,
);
export default router;
