import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const port = 3000;

const app = express();

app.use(express.json());

mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.error("could not connect to MongoDB", err)
)

app.get("/", (req, res) => {
  try {
    res.send("Hello from the server");
  } catch (error) {
    console.error(error);
  }
});

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
