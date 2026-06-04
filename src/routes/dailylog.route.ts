import { Router } from "express";
import * as controller from "../controllers/dailylog.controller";
import { validate } from "../middlewares/validation.middleware";
import { createLog } from "../schemas/dailylog.schema";
import { verifyToken } from "../middlewares/authentication.middleware";

const router = Router();

router.post("/", verifyToken, validate(createLog), controller.createLog);
router.get("/:date", verifyToken, controller.getLogByDate);

export default router;
