import { useStateContext } from 'context/StateContext';
import Link from 'next/link';
import React, { useRef } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai';

const Cart = () => {

    const cartRef =  useRef();

    const { totalQuantity, setShowCart, cartItems } = useStateContext()

  return (
    <div className='cart-wrapper' ref={cartRef}>
        <div className='cart-container' >
            <button className='cart-heading' onClick={() => setShowCart(false)}>
                <AiOutlineLeft />
                <span className='heading'>
                    Your Cart
                </span>
                <span className='cart-num-items'>({totalQuantity} Item)</span>
            </button>
            {cartItems.length < 1 && (
                <div className='empty-cart'>
                     <AiOutlineShopping size={150} />
                     <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
                </div>
            )}
        </div>
    </div>
  )
}

export default Cart;