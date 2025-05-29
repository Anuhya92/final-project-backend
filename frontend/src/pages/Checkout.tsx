import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Colors } from "../common/constants";
import OrderProgress from "../components/checkout/OrderProgress";
import CartItem from "../components/checkout/CartItem";
import AddressSelector from "../components/checkout/AddressSelector";
import PaymentSelector from "../components/checkout/PaymentSelector";
import OrderSummary from "../components/checkout/OrderSummary";
import OrderConfirmation from "../components/checkout/OrderConfirmation";
import heroImg from "../images/hero.jpg";

export default function Checkout() {
  const location = useLocation();
  const passedProduct = location.state?.product;

  const defaultProduct = {
    title: "Lamborghini Urus",
    description: "Urus Performante",
    image: heroImg,
    price: 3999999,
  };

  const product = passedProduct
    ? {
        title: passedProduct.title,
        description: passedProduct.description,
        image: passedProduct.imageUrl,
        price: parseInt(passedProduct.price.replace(/\D/g, "")),
      }
    : defaultProduct;

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState("address1");
  const [selectedPayment, setSelectedPayment] = useState("card");

  const handleRemoveItem = () => {
    console.log("Item removed");
  };

  return (
    <div
      className="max-w-6xl mx-auto px-4 py-8"
      style={{ color: Colors.black }}
    >
      <div className="mb-8">
        <OrderProgress step={currentStep} />
      </div>

      {currentStep === 1 && (
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <CartItem
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
              onRemove={handleRemoveItem}
            />
          </div>
          <div className="w-full lg:w-1/3">
            <OrderSummary
              btnLabel="Proceed to checkout"
              orderTotal={product.price}
              shippingCost="Free"
              onSubmit={() => {
                if (currentStep < 3) {
                  setCurrentStep(currentStep + 1);
                }
              }}
            />
          </div>
        </div>
      )}

      {currentStep === 2 && (
        <div className="flex flex-col lg:flex-row gap-8">
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
          <div className="w-full lg:w-1/3">
            <OrderSummary
              btnLabel="Proceed to payment"
              orderTotal={product.price}
              shippingCost="Free"
              onSubmit={() => {
                if (currentStep < 3) {
                  setCurrentStep(currentStep + 1);
                }
              }}
            />
          </div>
        </div>
      )}

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
