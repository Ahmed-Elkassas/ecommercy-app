import { useState } from "react";
import { client, urlFor } from "lib/client";
import Product from "components/Product";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

// styles
import styles from "styles/productDetails.module.css";
import { Fragment } from "react";

export default function ProductDetails({ product, products }) {
  const [index, setIndex] = useState(0);

  const { image, name, price, details } = product;

  return (
    <Fragment>
      <div className={styles["product-detail-container"]}>
        <div>
          <div>
            <img
              src={urlFor(image && image[index])}
              alt="name"
              className={styles["product-detail-image"]}
            />
          </div>
          <div className={styles["small-images-container"]}>
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index
                    ? `${styles["small-image"]} ${styles['selected-image']}`
                    : styles["small-image"]
                }
                onMouseEnter={() => setIndex(i)}
                alt={name}
              />
            ))}
          </div>    
        </div>
        {/* description */}
        <div className={styles["product-detail-desc"]}>
          <h1>{name}</h1>
          <div className={styles.reviews}>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
          <h4>Details</h4>
          <p>{details}</p>
          <h3 className={styles.price}>{price}</h3>
          <div>
            <div className={styles.quantity}>
              <h3>Quantity:</h3>
              <div className={styles["quantity-desc"]}>
                <span className={styles.minus}>
                  <AiOutlineMinus />
                </span>
                <span className={styles.num}>1</span>
                <span className={styles.plus}>
                  <AiOutlinePlus />
                </span>
              </div>
            </div>
            <div className={styles.buttons}>
              <button className={styles["add-to-cart"]}>Add to cart</button>
              <button className={styles["buy-now"]}>Buy now</button>
            </div>
          </div>
        </div>
        {/* other products */}
      </div>
      <div className={styles["suggestion-products"]}>
        <h2>You may also like</h2>
        <div className={styles.marquee}>
          <div
            className={`${styles["suggestion-products-container"]} ${styles.track}`}
          >
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"]{
        slug {
            current
        }
    }`;

  const products = await client.fetch(query);
  const paths = products.map((prodcut) => ({
    params: {
      slug: prodcut.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export async function getStaticProps({ params: { slug } }) {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  return {
    props: {
      product,
      products,
    },
  };
}
