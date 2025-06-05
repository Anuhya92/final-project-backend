import { Request, Response } from "express";
import { Address, PaymentMode } from "../common/types";
import User from "../models/User";
import mongoose, { Error } from "mongoose";

export const getAllAddressesByEmail = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const addressesOnly = await User.findOne(
      { id: userId },
      {
        addresses: 1,
        _id: 0,
      }
    );

    res.json(addressesOnly);
  } catch (error: any) {
    throw new Error(`Error fetching addresses: ${error.message}`);
  }
};

export const addAddressToUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const { address } = req.body;
    const { street, city, state, postalCode, country, isPrimary } = address;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $push: {
          addresses: { street, city, state, postalCode, country, isPrimary },
        },
      },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "Address added successfully", user: updatedUser });
  } catch (error: any) {
    console.error("Error adding address:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const removeAddressFromUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const addressId = req.params.addressId;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $pull: { addresses: { _id: addressId } },
      },
      { new: true, runValidators: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User or address not found" });
    }

    res
      .status(200)
      .json({ message: "Address removed successfully", user: updatedUser });
  } catch (error: any) {
    console.error("Error removing address:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const processPayment = (paymodeMode: PaymentMode) => {};

const processCardPayment = () => {};

const processPaypalPayment = () => {};
