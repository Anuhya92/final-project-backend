export type Car = {
  id: string;
  name: string;
  variant: string;
  power: string;
  acceleration: string;
};

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  isPrimary: boolean;
}

export type Customer = {
  name: string;
  email: string;
  phone: string;
  address?: Address; // Address will be optional, but when customer wants to place order they should have one
};

export type PaymentMode = "Card" | "Paypal" | "Crypto";

export type Payment = {
  method: PaymentMode;
};

export type CardDetails = {
  cardNumber: string;
  expiry: string;
  cvv: number;
};

export type CheckoutRequest = {
  carId: string;
  customer: Customer;
  payment: Payment;
};

export type CheckoutResponse = {
  orderId: string;
};
