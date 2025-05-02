import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = 3000;

const app = express();

app.use(express.json());

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
