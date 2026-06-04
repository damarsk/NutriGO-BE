import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.route";
import foodRoutes from "./routes/food.route";
import profileRoutes from "./routes/profile.route";
import { errorHandler } from "./middlewares/error.middleware";
import { swaggerDocs } from "./docs/swagger";

const app = express();
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

if (process.env.ENVIRONMENT === "DEV") {
  swaggerDocs(app);
}

app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).json({
    message: "Welcome to NutroGO API",
  });
});
app.use("/api/auth", authRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/profile", profileRoutes);

app.use(errorHandler);

export default app;
