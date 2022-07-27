import { useState, useContext, useEffect } from "react";
import React from "react";
import { CartContext } from "../context/cartContext";
import { ShoppingCartIcon, ChevronDownIcon } from "@heroicons/react/outline";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);


  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );

  return (
    <div>
      {!cartOpen ? (
        <button
          onclick={() => setCartOpen(!cartOpen)}
          title="Contact Sale"
          class="fixed z-50 bottom-10 right-8 bg-zinc-800 dark:bg-zinc-50 border-2 dark:border-zinc-700 border-zinc-50 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl dark:hover:bg-zinc-200 hover:drop-shadow-2xl"
        >
          {" "}
          <ShoppingCartIcon className="h-8 w-8 dark:text-black text-white" />{" "}
          <span class="top-0 left-14 absolute text-base w-8 h-8 bg-red-500 border-2 dark:border-white border-gray-800 rounded-full  flex justify-center items-center">
            {productsLength}
          </span>
        </button>
      ) : (
        <button
          onclick={() => setCartOpen(!cartOpen)}
          title="Contact Sale"
          class="fixed z-50 bottom-10 right-8 bg-zinc-800 dark:bg-zinc-50 border-2 dark:border-zinc-700 border-zinc-50 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl dark:hover:bg-zinc-200 hover:drop-shadow-2xl"
        >
          {" "}
          <ChevronDownIcon className="h-8 w-8 dark:text-black text-white" />{" "}
        </button>
      )}
      {cartItems && cartOpen && (
        <div className="fixed z-50 bottom-32 right-8 rounded-xl bg-zinc-100 dark:bg-zinc-700  md:w-2/4 w-96 h-96 drop-shadow-lg flex justify-start items-center dark:text-white text-xl">
          <ul>
            {cartItems.length === 0 ? (
              <p>Tu carrito esta vacio</p>
            ) : (
              <div>
                {cartItems.map((item, i) => {
                  <li>item.item</li>;
                })}
              </div>
            )}
            <li>Total: ${total}</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cart;
