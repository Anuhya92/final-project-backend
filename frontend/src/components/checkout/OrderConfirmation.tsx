import { CheckCircle } from "lucide-react";

type OrderConfirmationProps = {
  orderNumber: string;
};

export default function OrderConfirmation({
  orderNumber,
}: OrderConfirmationProps) {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="bg-green-50 p-6 border-b">
        <div className="flex items-center">
          <CheckCircle className="text-green-500 mr-3" size={24} />
          <div>
            <h1 className="text-xl font-bold text-gray-800">
              Order Confirmed!
            </h1>
            <p className="text-gray-600">Order #{orderNumber}</p>
          </div>
        </div>
        <p className="mt-3 text-gray-600">
          Thank you for your purchase. We'll keep you updated regarding the
          manufacture and delivery dates!
        </p>
      </div>
    </div>
  );
}
