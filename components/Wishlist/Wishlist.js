import styles from "./Wishlist.module.scss";

import { urlFor } from "../../lib/client";
import { Attribute } from "../Attribute/Attribute";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Wishlist({ bgColor, cardColor, items }) {
  const favorites = items
    .filter((i) => i.favorite)
    ?.sort((a, b) => a.price - b.price);

  const standards = items
    .filter((i) => !i.favorite)
    ?.sort((a, b) => a.price - b.price);

  const sorted = items?.sort((a, b) => a.price - b.price);

  return (
    <section className={styles.section}>
      <div className={styles.items}>
        {/* favorites */}
        {sorted
          .filter((i) => i.favorite)
          .map((item) => {
            return <WishlistItem key={item._id} item={item} />;
          })}

        {/* rest */}
        {sorted
          .filter((i) => !i.favorite)
          .map((item) => {
            return <WishlistItem key={item._id} item={item} />;
          })}
      </div>
    </section>
  );
}

function WishlistItem({ item }) {
  const {
    title,
    description,
    price,
    link,
    favorite,
    imagem,
    imaget,
    imageb,
    attributes,
  } = item;

  return (
    <div className={styles.item} style={{ background: "#fff" }}>
      <div className={styles.images}>
        <div className={styles.left}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          {imagem && <img src={urlFor(imagem)} alt="item preview" />}
        </div>

        <div className={styles.right}>
          {imaget && (
            <img
              className={styles.top}
              src={urlFor(imaget)}
              alt="item preview"
            />
          )}

          {imageb && (
            <img
              className={styles.btm}
              src={urlFor(imageb)}
              alt="item preview"
            />
          )}
        </div>
      </div>

      <div className={styles.text}>
        <div className={styles.textTitle}>
          {favorite && <FontAwesomeIcon icon={["fas", "star"]} />}
          <h2>{title}</h2>
        </div>

        {description && <p className={styles.description}>{description}</p>}
      </div>

      {attributes && (
        <div className={styles.attributes}>
          {attributes?.map(({ tag, value, icon }, i) => {
            return <Attribute tag={tag} value={value} icon={icon} key={i} />;
          })}
        </div>
      )}

      <div className={styles.actions}>
        <a href={link} target="_blank" rel="noreferrer">
          View Online
        </a>

        <p className={styles.price}>${price}</p>
      </div>
    </div>
  );
}
