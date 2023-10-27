import styles from "./Wishlist.module.scss";
import { useState } from "react";

import { urlFor } from "../../lib/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeDropperEmpty } from "@fortawesome/free-solid-svg-icons";

export function Wishlist({ bgColor, cardColor, items }) {
  const [sort, setSort] = useState(true);

  return (
    <section className={styles.section}>
      {/* <div className={styles.navbar} style={{ background: bgColor.hex }}>
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
      </div> */}
      <div className={styles.items}>
        {items
          ?.sort((a, b) => (sort ? a.price - b.price : b.price - a.price))
          .map(
            ({
              _id,
              title,
              description,
              price,
              link,
              imagem,
              imaget,
              imageb,
              attributes,
            }) => {
              return (
                <div
                  className={styles.item}
                  style={{ background: cardColor.hex }}
                  key={_id}
                >
                  <div className={styles.images}>
                    <div className={styles.left}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      {imagem && (
                        <img src={urlFor(imagem)} alt="item preview" />
                      )}
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
                    <h2>{title}</h2>

                    {description && (
                      <p className={styles.description}>{description}</p>
                    )}
                  </div>

                  {attributes && (
                    <div className={styles.attributes}>
                      {attributes?.map(({ tag, value }, index) => {
                        return (
                          <div className={styles.attribute} key={index}>
                            <FontAwesomeIcon icon={faEyeDropperEmpty} />
                            <p>
                              {tag}
                              <span>{value}</span>
                            </p>
                          </div>
                        );
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
          )}
      </div>
    </section>
  );
}
