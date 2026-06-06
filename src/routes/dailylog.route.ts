import { Router } from "express";
import * as controller from "../controllers/dailylog.controller";
import { validate } from "../middlewares/validation.middleware";
import { createLog, updateLog } from "../schemas/dailylog.schema";
import { verifyToken } from "../middlewares/authentication.middleware";

const router = Router();

router.post("/", verifyToken, validate(createLog), controller.createLog);
router.get("/:date", verifyToken, controller.getLogByDate);
router.patch(
  "/:id",
  verifyToken,
  validate(updateLog),
  controller.updateLogById,
);
router.delete("/:id", verifyToken, controller.deleteLogById);

export default router;
