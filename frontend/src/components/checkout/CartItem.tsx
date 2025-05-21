type CartItemProps = {
  title: string;
  image: string;
  description: string;
  price: number;
  onRemove: () => void;
};

export default function CartItem({
  title,
  image,
  price,
  description,
  onRemove,
}: CartItemProps) {
  return (
    <div className="flex items-start p-4 border-b">
      <div className="flex-shrink-0 w-24 h-24 bg-gray-100 p-2">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>

      <div className="ml-4 flex-grow">
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium text-lg">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="text-right">
            <p className="font-medium">{price.toLocaleString()} kr</p>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center">
            <label className="mr-2 text-sm text-gray-600">Quantity:</label>
            <div className="relative">
              <select
                title="Number of items selected"
                value={"1"}
                onChange={onRemove}
                className="appearance-none bg-white border rounded px-3 py-1 pr-8"
                disabled
              >
                {[1].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <button
            onClick={onRemove}
            className="text-blue-600 cursor-pointer hover:underline text-sm flex items-center "
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
