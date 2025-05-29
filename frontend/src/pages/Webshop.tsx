import React from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const products: Product[] = [
  {
    id: "1",
    title: "Lamborghini Urus",
    description: "A declaration of freedom",
    imageUrl:
      "https://stimg.cardekho.com/images/carexteriorimages/930x620/Lamborghini/Urus/10635/1724844423793/front-left-side-47.jpg",
    price: "3 999 999 kr",
  },
  {
    id: "2",
    title: "Lamborghini Revuleto",
    description: "Harness the power of hybridization",
    imageUrl:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2025/s2.jpg",
    price: "2 599 999 kr",
  },
  {
    id: "3",
    title: "Lamborghini Temerario",
    description: "A new frontier of driving emotions",
    imageUrl:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2025/img-right.jpg",
    price: "1 999 999 kr",
  },
  {
    id: "4",
    title: "Lamborghini Huracán",
    description: "From our past, we've learned perfection",
    imageUrl:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2025/img-left.jpg",
    price: "7 500 000 kr",
  },
];

const WebshopPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBuyClick = (product: Product) => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{product.title}</h2>
                  <p className="text-gray-600 text-sm mb-2">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold">{product.price} kr</p>
                  <button
                    onClick={() => handleBuyClick(product)}
                    className="mt-4 w-full bg-alternate text-white py-2 rounded-lg hover:bg-primary"
                  >
                    Buy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default WebshopPage;
