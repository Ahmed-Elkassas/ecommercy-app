import Link from "next/link";
import { useEffect } from "react";

import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "context/StateContext";
import { runConfetti } from "lib/uitls";

function Success() {

    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runConfetti();
    }, [])

  return (
    <div className="success-Wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt.</p>
        <p className="description">
          If you have any questions, please email
          <a className="email" href="mailto:contact@ahmedelkassas.com">
            contact@ahmedelkassas.com
          </a>
        </p>
        <Link href="/" >
            <button type="button" width="300px" className="btn">Continue Shopping</button>
        </Link>
      </div>
    </div>
  );
}

export default Success;