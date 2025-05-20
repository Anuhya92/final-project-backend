import { CreditCard, Wallet } from "lucide-react";
import { Colors } from "../../common/constants";

type PaymentSelectorProps = {
  selectedPaymentId: string;
  onSelectPayment: (paymentModeId: string) => void;
};

export default function PaymentSelector({
  selectedPaymentId,
  onSelectPayment,
}: PaymentSelectorProps) {
  const paymentMethods = [
    {
      id: "card",
      name: "Credit/Debit card",
      icon: <CreditCard size={20} />,
      description: "Visa, Mastercard, etc.",
    },
    {
      id: "paypal",
      name: "Paypal",
      icon: <Wallet size={20} />,
      description: "Pay easy with Paypal",
    },
    {
      id: "swish",
      name: "Swish",
      icon: <Wallet size={20} />,
      description: "Pay directly with Swish",
    },
  ];

  return (
    <div className="space-y-4">
      {paymentMethods.map((method) => (
        <div
          key={method.id}
          className="p-4 border rounded cursor-pointer"
          style={{
            borderColor:
              selectedPaymentId === method.id
                ? Colors.blue
                : Colors.neutral + "40",
            backgroundColor:
              selectedPaymentId === method.id
                ? Colors.blue + "10"
                : Colors.white,
          }}
          onClick={() => onSelectPayment(method.id)}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="mr-3" style={{ color: Colors.blue }}>
                {method.icon}
              </div>
              <div>
                <div className="font-medium">{method.name}</div>
                <div style={{ color: Colors.neutral }}>
                  {method.description}
                </div>
              </div>
            </div>
            <div
              className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
              style={{
                borderColor: Colors.blue,
                backgroundColor:
                  selectedPaymentId === method.id ? Colors.blue : "transparent",
              }}
            >
              {selectedPaymentId === method.id && (
                <div className="w-3 h-3 rounded-full bg-white"></div>
              )}
            </div>
          </div>

          {selectedPaymentId === method.id && method.id === "card" && (
            <div
              className="mt-4 border-t pt-4"
              style={{ borderColor: Colors.neutral + "20" }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label
                    className="block text-sm mb-1"
                    style={{ color: Colors.neutral }}
                  >
                    Kortnummer
                  </label>
                  <input
                    type="text"
                    placeholder="0000 0000 0000 0000"
                    className="w-full p-2 border rounded"
                    style={{ borderColor: Colors.neutral + "40" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-1"
                    style={{ color: Colors.neutral }}
                  >
                    Utgångsdatum
                  </label>
                  <input
                    type="text"
                    placeholder="MM/ÅÅ"
                    className="w-full p-2 border rounded"
                    style={{ borderColor: Colors.neutral + "40" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm mb-1"
                    style={{ color: Colors.neutral }}
                  >
                    CVC
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full p-2 border rounded"
                    style={{ borderColor: Colors.neutral + "40" }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
