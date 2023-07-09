import { Product } from "@/types/product";
import Button from "./Button";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart, removeFromCart, inCart } = useContext(CartContext);

  return (
    <div className="flex flex-col col-span-1 bg-dark border border-gray-700 rounded-lg">
      <img
        className="rounded-t-lg h-80 w-full brightness-90 hover:brightness-75 transition-all duration-300"
        src={product.image}
        alt={product.title}
      />
      <div className="p-5 flex flex-1 flex-col justify-between">
        <div className="space-y-4">
          <h5 className="text-lg font-bold text-secondary">{product.title}</h5>
          <p className="text-lg text-secondary">${product.price}</p>
          <p className="text-gray-400 capitalize text-sm">
            {product.description.length > 100
              ? `${product.description.slice(0, 98)}...`
              : product.description}
          </p>
        </div>
        <div className="flex items-center gap-4 mt-4">
          <Button variant="primary">Buy now</Button>
          {inCart(product.id) ? (
            <Button
              variant="tertiary"
              onClick={() => removeFromCart(product.id)}
            >
              Remove from cart
            </Button>
          ) : (
            <Button variant="secondary" onClick={() => addToCart(product.id)}>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
