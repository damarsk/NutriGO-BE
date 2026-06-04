import { Router } from "express";
import * as controller from "../controllers/profile.controller";
import { validate } from "../middlewares/validation.middleware";
import {
  createProfileSchema,
  updateProfileSchema,
} from "../schemas/profile.schema";
import { verifyToken } from "../middlewares/authentication.middleware";

const router = Router();

router.get("/", verifyToken, controller.getProfile);
router.post(
  "/",
  verifyToken,
  validate(createProfileSchema),
  controller.createProfile,
);
router.put(
  "/",
  verifyToken,
  validate(updateProfileSchema),
  controller.updateProfile,
);

export default router;
