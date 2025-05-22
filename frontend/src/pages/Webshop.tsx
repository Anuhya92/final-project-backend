import React from "react";

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
    title: "Product 1",
    description: "This is the first product.",
    imageUrl:
      "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2025/s2.jpg",
    price: "$19.99",
  },
  {
    id: "2",
    title: "Product 2",
    description: "This is the second product.",
    imageUrl: "https://storage.googleapis.com/pod_public/1300/176804.jpg",
    price: "$29.99",
  },
  {
    id: "3",
    title: "Product 3",
    description: "This is the third product.",
    imageUrl:
      "https://image.nordjyske.dk/users/nordjyske/images/81114263.jpg?t[strip]=true&t[resize][width]=5000&t[resize][height]=3333&accessToken=6dea84437cb43fc29f0db3371da30c817f426a4f706db4aec7a7dc2de8d047cf",
    price: "$39.99",
  },
  {
    id: "4",
    title: "Product 4",
    description: "This is the fourth product.",
    imageUrl:
      "https://www.affarsvarlden.se/wp-content/uploads/2023/03/c200-lamborghini-sian-rds-final-150-1594215316.jpg",
    price: "$49.99",
  },
];

const WebshopPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Cars</h1>
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
              <p className="text-lg font-bold">{product.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebshopPage;
