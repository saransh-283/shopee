import { CartContext } from "@/contexts/CartContext";
import {
  MinusCircleIcon,
  ShoppingCartIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Fragment, useContext, useState } from "react";
import CartProduct from "./CartProduct";

export default function CartSidebar() {
  const [open, setOpen] = useState(false);
  const { cart,total } = useContext(CartContext);
  return (
    <div
      className={`fixed top-0 space-y-4 right-0 w-4/5 md:w-1/3 bg-dark border-l border-gray-700 h-full p-5 transition-all duration-300 z-20 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div
        onClick={() => setOpen(true)}
        className={`flex flex-col mt-20 cursor-pointer gap-2 justify-center items-center rounded-l-full bg-primary h-28 w-28 text-secondary -translate-x-full${
          open ? " hidden" : ""
        }`}
      >
        <ShoppingCartIcon className="h-7 w-7" />
        <span className="text-sm font-bold uppercase">Cart</span>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-secondary">Cart</h1>
        <button onClick={() => setOpen(false)}>
          <XMarkIcon className="h-7 w-7 text-secondary" />
        </button>
      </div>

      {cart.length === 0 ? (
        <p className="text-secondary">Your cart is empty</p>
      ) : (
        <Fragment>
          {cart.map((product) => (
            <CartProduct key={product.id} product={product} />
          ))}
          <p className="text-right text-secondary text-sm font-bold">
              Your Total: <span className="text-green-500 text-lg font-bold">${total.toFixed(2)}</span>
          </p>
        </Fragment>
      )}
    </div>
  );
}
