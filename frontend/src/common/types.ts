export type Car = {
  id: string;
  name: string;
  variant: string;
  power: string;
  acceleration: string;
};

export type Buyer = {
  name: string;
  email: string;
  address: string;
  phone: string;
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
  buyer: Buyer;
  payment: Payment;
};

export type CheckoutResponse = {
  orderId: string;
};
