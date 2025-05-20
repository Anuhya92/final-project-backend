import { useState } from "react";
import { Colors } from "../common/constants";
import OrderProgress from "../components/checkout/OrderProgress";
import CartItem from "../components/checkout/CartItem";
import AddressSelector from "../components/checkout/AddressSelector";
import PaymentSelector from "../components/checkout/PaymentSelector";
import OrderSummary from "../components/checkout/OrderSummary";
import OrderConfirmation from "../components/checkout/OrderConfirmation";
import heroImg from "../images/hero.jpg";

export default function Checkout() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState("address1");
  const [selectedPayment, setSelectedPayment] = useState("card");
  //   const [formData, setFormData] = useState({
  //     firstName: "Johan",
  //     lastName: "Andersson",
  //     email: "johan.andersson@example.com",
  //     mobile: "070-123 45 67",
  //   });

  //   const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const { name, value } = e.target;
  //     setFormData((prevData) => ({
  //       ...prevData,
  //       [name]: value,
  //     }));
  //   };

  const handleRemoveItem = () => {
    console.log("Item removed");
  };

  //   const handleSubmit = () => {
  //     console.log("Submitting order", {
  //       address: selectedAddress,
  //       payment: selectedPayment,
  //       formData,
  //     });
  //   };

  return (
    <div
      className="max-w-6xl mx-auto px-4 py-8"
      style={{ color: Colors.black }}
    >
      <div className="mb-8">
        <OrderProgress step={currentStep} />
      </div>
      {/* Step 1*/}
      {currentStep === 1 && (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Items in cart */}
          <div className="w-full lg:w-2/3">
            <CartItem
              image={heroImg}
              title="Lamborghini Urus"
              description="Urus Performante"
              price={3999999}
              onRemove={handleRemoveItem}
            />
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full lg:w-1/3">
            <OrderSummary
              btnLabel="Proceed to checkout"
              orderTotal={3999999}
              shippingCost="Free"
              onSubmit={() => {
                console.log("Submitted");
                if (currentStep < 3) {
                  setCurrentStep(currentStep + 1);
                }
              }}
            />
          </div>
        </div>
      )}
      {/* Step 2*/}
      {currentStep === 2 && (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Forms */}
          <div className="w-full lg:w-2/3">
            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">Delivery address</h2>
              <AddressSelector
                selectedAddressId={selectedAddress}
                onSelectAddress={setSelectedAddress}
              />
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-medium mb-4">Payment method</h2>
              <PaymentSelector
                selectedPaymentId={selectedPayment}
                onSelectPayment={setSelectedPayment}
              />
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="w-full lg:w-1/3">
            <OrderSummary
              btnLabel="Proceed to payment"
              orderTotal={3999999}
              shippingCost="Free"
              onSubmit={() => {
                console.log("Submitted");
                if (currentStep < 3) {
                  setCurrentStep(currentStep + 1);
                }
              }}
            />
          </div>
        </div>
      )}
      {/* Step 3*/}
      {currentStep === 3 && (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full">
            <OrderConfirmation orderNumber="121212" />
          </div>
        </div>
      )}
    </div>
  );
}
