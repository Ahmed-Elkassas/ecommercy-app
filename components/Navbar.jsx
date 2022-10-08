import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'

import Cart from './Cart'
import { useStateContext } from 'context/StateContext'

// styles
import styles from 'styles/navbar.module.css'

const Navbar = () => {

const {totalQuantity, showCart, setShowCart} = useStateContext()

  return (
    <div className={styles['navbar-container']}>
        <p>
            <Link href="/">E-Commercy</Link>
        </p>
        <button type='button' className={styles["cart-icon"]} onClick={() => setShowCart(true)}>
            <AiOutlineShoppingCart />
            <span className={styles["cart-item-qty"]}>{totalQuantity}</span>
        </button>
        {showCart && <Cart />}
    </div>
  )
}

export default Navbar