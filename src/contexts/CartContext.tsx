import useProducts from "@/hooks/useProducts";
import { Product } from "@/types/product";
import React, { createContext, useState } from "react";

interface CartContextProps {
  cart: Product[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  inCart: (id: number) => boolean;
  total: number;
}

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: (id) => {},
  removeFromCart: (id) => {},
  inCart: (id) => false,
  total: 0,
});

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Product[]>([]);
  const products = useProducts();

  const addToCart = (id: number) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id: number) => {
    const newCart = cart.filter((product) => product.id !== id);
    setCart(newCart);
  };

  const inCart = (id: number) => {
    return cart.some((product) => product.id === id);
  };

  const total = cart.reduce(
    (acc, product) => acc + parseFloat(product.price),
    0
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, inCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
}
