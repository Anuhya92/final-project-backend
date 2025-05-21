import { Colors } from "../../common/constants";

type OrderSummaryProps = {
  btnLabel: string;
  orderTotal: number;
  shippingCost: string;
  onSubmit?: () => void; //ToDo
};

export default function OrderSummary({
  btnLabel,
  shippingCost,
  orderTotal,
  onSubmit,
}: OrderSummaryProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-medium mb-4">Order Summary</h2>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span>{shippingCost}</span>
        </div>

        <div className="pt-3 border-t border-gray-200">
          <div className="flex justify-between font-medium">
            <span>Total</span>
            <span>{orderTotal.toLocaleString("sv-SE")} kr</span>
          </div>
          <div className="text-sm text-gray-500 mt-1">Including VAT (25%)</div>
        </div>
      </div>

      <button
        className="w-full text-white cursor-pointer hover:bg-blue-600 py-3 rounded mt-6"
        style={{ backgroundColor: Colors.blue }}
        onClick={onSubmit}
      >
        {btnLabel}
      </button>
    </div>
  );
}
