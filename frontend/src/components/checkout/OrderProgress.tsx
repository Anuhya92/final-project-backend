import { Check } from "lucide-react";
import { Colors } from "../../common/constants";

type OrderProgressProps = {
  step: number;
};

const steps = [
  { number: 1, name: "Order Summary" },
  { number: 2, name: "Delivery & Payment" },
  { number: 3, name: "Confirmation" },
];

export default function OrderProgress({ step }: OrderProgressProps) {
  return (
    <div className="flex items-center justify-center">
      {steps.map((s, index) => (
        <div key={s.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className="rounded-full w-8 h-8 flex items-center justify-center"
              style={{
                backgroundColor:
                  s.number <= step ? Colors.blue : Colors.lightGray,
                color: s.number <= step ? Colors.white : Colors.neutral,
              }}
            >
              {s.number <= step ? <Check size={16} /> : s.number}
            </div>
            <div
              className="text-sm mt-1"
              style={{
                color: s.number <= step ? Colors.black : Colors.neutral,
                fontWeight: s.number === step ? 500 : 400,
              }}
            >
              {s.name}
            </div>
          </div>

          {index < steps.length - 1 && (
            <div
              className="mx-2 h-1 w-16"
              style={{
                backgroundColor:
                  s.number < step ? Colors.blue : Colors.lightGray,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
