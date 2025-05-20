import { useState } from "react";
import { Colors } from "../../common/constants";
import AddressForm from "./AddressForm";

type AddressSelectorProps = {
  selectedAddressId: string;
  onSelectAddress: (addressId: string) => void;
};

export default function AddressSelector({
  selectedAddressId,
  onSelectAddress,
}: AddressSelectorProps) {
  const [isNewAddress, setIsNewAddress] = useState<boolean>(false);
  const addresses = [
    {
      id: "address1",
      name: "Home",
      street: "Storgatan 42",
      postal: "114 55",
      city: "Stockholm",
    },
    {
      id: "address2",
      name: "Office",
      street: "Företagsvägen 12",
      postal: "164 40",
      city: "Kista",
    },
  ];

  return (
    <div className="space-y-4">
      {!isNewAddress &&
        addresses.map((address) => (
          <div
            key={address.id}
            className="p-4 border rounded cursor-pointer"
            style={{
              borderColor:
                selectedAddressId === address.id
                  ? Colors.blue
                  : Colors.neutral + "40",
              backgroundColor:
                selectedAddressId === address.id
                  ? Colors.blue + "10"
                  : Colors.white,
            }}
            onClick={() => onSelectAddress(address.id)}
          >
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">{address.name}</div>
                <div style={{ color: Colors.neutral }}>{address.street}</div>
                <div style={{ color: Colors.neutral }}>
                  {address.postal} {address.city}
                </div>
              </div>
              <div
                className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                style={{
                  borderColor: Colors.blue,
                  backgroundColor:
                    selectedAddressId === address.id
                      ? Colors.blue
                      : "transparent",
                }}
              >
                {selectedAddressId === address.id && (
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                )}
              </div>
            </div>
          </div>
        ))}

      {isNewAddress && <AddressForm />}

      <button
        className="flex items-center mt-2 text-sm"
        style={{ color: Colors.blue }}
      >
        <span className="mr-1" onClick={() => setIsNewAddress(true)}>
          + Add new address
        </span>
      </button>
    </div>
  );
}
