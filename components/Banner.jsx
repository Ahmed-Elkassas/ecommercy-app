import Link from "next/link";
import { urlFor } from "../lib/client";
// import Image from "next/image";

// styles
import styles from 'styles/banner.module.css'

export default function Banner({heroBanner}) {
    return (
        <div className={styles["hero-banner-container"]}>
            <div>
                <p className={styles["beats-solo"]}>{heroBanner.smallText}</p>
                <h3>{heroBanner.midText}</h3>
                <h1>{heroBanner.largeText1}</h1>
                <img src={urlFor(heroBanner.image)}  alt="headphones" className={styles["hero-banner-image"]}/>
            </div>
            <div>
                <Link href={`/product/${heroBanner.product}`}>
                    <button>{heroBanner.buttonText}</button>
                </Link>
                <div className={styles["desc"]}>
                    <h5>Description</h5>
                    <p>{heroBanner.desc}</p>
                </div>
            </div>
        </div>
    )
}