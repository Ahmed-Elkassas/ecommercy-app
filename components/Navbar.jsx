import Link from 'next/link'
import {AiOutlineShoppingCart} from 'react-icons/ai'

// styles
import styles from 'styles/navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles['navbar-container']}>
        <p>
            <Link href="/">E-Commercy</Link>
        </p>
        <button type='button' className={styles["cart-icon"]}>
            <AiOutlineShoppingCart />
            <span className={styles["cart-item-qty"]}>0</span>
        </button>
    </div>
  )
}

export default Navbar