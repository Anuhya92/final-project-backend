import express from "express";
import {
  addAddressToUser,
  getAllAddressesByEmail,
} from "../controllers/userController";

const router = express.Router();

router.get("/:id/addresses", getAllAddressesByEmail);
router.post("/:id/addresses", addAddressToUser);
router.post("/:id/checkout", (req, res) => {
  res.status(201).send("Order placed successfully");
});

export default router;
