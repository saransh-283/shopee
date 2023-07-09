import { CartContext } from "@/contexts/CartContext";
import { Product } from "@/types/product";
import { MinusCircleIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";

export default function CartProduct({ product }: { product: Product }) {
  const { removeFromCart } = useContext(CartContext);

  return (
    <div className="flex items-center justify-between gap-4 bg-dark border border-gray-700 rounded-lg">
      <div className="flex items-center gap-2">
        <img
          className="w-24 h-24 rounded-l-lg"
          src={product.image}
          alt={product.title}
        />
        <div>
          <h1 className="text-sm font-bold text-secondary">{product.title}</h1>
          <p className="text-xs text-secondary">${product.price}</p>
        </div>
      </div>

      <button className="mr-4" onClick={() => removeFromCart(product.id)}>
        <MinusCircleIcon className="h-7 w-7 text-secondary" />
      </button>
    </div>
  );
}
