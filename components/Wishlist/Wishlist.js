import styles from "./Wishlist.module.scss";
import { useState } from "react";

import { urlFor } from "../../lib/client";

export function Wishlist({ bgColor, cardColor, items }) {
  const [sort, setSort] = useState(true);

  return (
    <section className={styles.section}>
      <div className={styles.navbar} style={{ background: bgColor.hex }}>
        <div>
          <h2>My Wishlist</h2>
        </div>
        <div>
          <p>{items.length} items</p>
          <button onClick={() => setSort(!sort)}>
            <p>
              Sort by <span>{sort ? "Lowest Price ▼" : "Highest Price ▲"}</span>
            </p>
          </button>
        </div>
        <hr />
      </div>
      <div className={styles.items}>
        {items
          ?.sort((a, b) => (sort ? a.price - b.price : b.price - a.price))
          .map(
            ({ _id, title, description, price, link, image, attributes }) => {
              return (
                <div
                  className={styles.item}
                  key={_id}
                  style={{ background: cardColor.hex }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <a href={link}>
                    <img src={urlFor(image)} alt="item preview" />
                  </a>
                  <aside>
                    <div className={styles.header}>
                      <div className={styles.title}>
                        <h2>{title}</h2>
                        <p className={styles.price}>${price}</p>
                      </div>
                      {link && (
                        <p>
                          <a href={link}>View Online</a>
                        </p>
                      )}
                    </div>
                    {description && (
                      <p className={styles.description}>{description}</p>
                    )}
                    {attributes && (
                      <div className={styles.attributes}>
                        {attributes?.map(({ tag, value }, index) => {
                          return (
                            <h5 className={styles.attribute} key={index}>
                              {tag}
                              <span>{value}</span>
                            </h5>
                          );
                        })}
                      </div>
                    )}
                  </aside>
                </div>
              );
            }
          )}
      </div>
    </section>
  );
}
