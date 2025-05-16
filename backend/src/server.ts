
  import express from "express";
  import mongoose from "mongoose";
  import dotenv from "dotenv";
  import cors from "cors";
  import aboutRouter from "./routes/aboutRoutes";
  import logger from "./utils/logger";

  dotenv.config();

  const app = express();
  const PORT = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.json());

  app.use("/api/about", aboutRouter);

  mongoose
  .connect(process.env.MONGO_URI || "", {
  })
  .then(() => {
    logger.info("Connected to MongoDB");
    app.listen(PORT, () => {
      logger.info(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    logger.error("MongoDB connection failed:", + err.message);
    process.exit(1);
  });
  