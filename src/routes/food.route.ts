import { Router } from "express";
import * as controller from "../controllers/food.controller";
import { validate } from "../middlewares/validation.middleware";
import { createFoodSchema } from "../schemas/food.schema";
import { verifyToken } from "../middlewares/authentication.middleware";
import { requireRole } from "../middlewares/authorization.middleware";

const router = Router();

router.get("/", verifyToken, controller.getAllFoods);
router.post(
  "/",
  verifyToken,
  requireRole(["ADMIN"]),
  validate(createFoodSchema),
  controller.createFood,
);
router.put(
  "/:id",
  verifyToken,
  requireRole(["ADMIN"]),
  validate(createFoodSchema),
  controller.updateFood,
);
router.delete(
  "/:id",
  verifyToken,
  requireRole(["ADMIN"]),
  controller.deleteFood,
);
export default router;
