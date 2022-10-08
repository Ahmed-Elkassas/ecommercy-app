import React, { createContext, useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
const Context = createContext();


export const StateContext  = ({ children }) => {

    const [qty, setQty] = useState(1);
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalPrice, setTotalPrice] = useState()

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
      }
      const decQty = () => {
        setQty((prevQty) => {
          if(prevQty - 1 < 1) return 1;
         
          return prevQty - 1;
        });
      }

      const onAddToCart = (product, quantity) => {
        const existingItem = cartItems.find((item) => item._id === product._id);
        setTotalPrice(prevPrice => prevPrice + product.price * quantity);
        if(existingItem) {
          const updatedItems = cartItems.map((productCart) => {
            if(productCart._id === product._id) return {
              ...productCart,
              quantity: productCart.quantity + quantity
            }
          })
          setCartItems(updatedItems)
        } else {
          setTotalQuantity(prevQty => prevQty + quantity)
          product.quantity + quantity;
          setCartItems([...cartItems, {...product}])
        }
        toast.success(`You just added ${qty} of ${product.name}.`)
      }

      return (
        <Context.Provider
          value={{
            qty,
            showCart,
            cartItems,
            totalQuantity,
            totalPrice, 
            incQty,
            decQty,
            onAddToCart,
          }}
        >
          {children}
        </Context.Provider>
      )
    }
export const useStateContext = () => useContext(Context)
