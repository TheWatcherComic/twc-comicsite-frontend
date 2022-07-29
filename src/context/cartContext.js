import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const localProductStorage = localStorage.getItem("cartProducts");
      return localProductStorage ? JSON.parse(localProductStorage) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
    
  }, [cartItems]);

  const addItemToCart = (product) => {

    const inCart = cartItems.find((productInCart) => Number(productInCart.com_id) === Number(product.com_id) );

    if (inCart) {
      setCartItems(
        cartItems.map((productInCart) => {
          if (Number(productInCart.com_id) === Number(product.com_id)) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return productInCart;
        })
      );
    } else {
      setCartItems([cartItems, { ...product, amount: 1 }]);
    }
  };

  const deleteItemToCart = (product) => {
    const inCart = cartItems.find(
      (productInCart) => Number(productInCart.com_id) === Number(product.com_id)
    );

    if (inCart.amount === 1) {
      setCartItems(
        cartItems.filter((productInCart) => Number(productInCart.com_id) !== Number(product.com_id))
      );
    } else {
      setCartItems((productInCart) => {
        if (Number(productInCart.com_id) === Number(product.com_id)) {
          return { ...inCart, amount: inCart.amount - 1 };
        } else return productInCart;
      });
    }
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addItemToCart, deleteItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
