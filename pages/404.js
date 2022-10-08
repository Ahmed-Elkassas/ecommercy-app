import Link from "next/link";

// sytles 

import styles from 'styles/404.module.css'

export default function PageNotFound() {
    return (
        <div className={styles["page-not-found"]}>
            <h2>Sorry Page Not Found</h2>
            <Link href="/">
                <a className={styles.link}>Home</a>
            </Link>
        </div>
    )
}