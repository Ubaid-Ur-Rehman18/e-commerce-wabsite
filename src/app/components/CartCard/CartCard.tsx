// src/components/cartCard.tsx

import Image from "next/image";

interface CartCardProps {
  name: string;
  size: string;
  color: string;
  price: string;
  src: string;
}

const CartCard = ({ name, size, color, price, src }: CartCardProps) => {
  return (
    <div className="flex items-center justify-between p-4 border-b">
      {/* Product Image */}
      <div className="w-[100px] h-[100px] relative">
        <Image src={src} alt={name} layout="fill" objectFit="cover" className="rounded-md" />
      </div>

      {/* Product Details */}
      <div className="flex-1 ml-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{size}</p>
        <p className="text-sm text-gray-600">{color}</p>
      </div>

      {/* Price */}
      <div className="text-lg font-semibold text-gray-800">{price}</div>

      {/* Remove Button (if needed) */}
      <button className="text-red-500 hover:text-red-700 text-sm mt-2">
        Remove
      </button>
    </div>
  );
};

export default CartCard;
