import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./StockingStuffers.module.scss";

export function StockingStuffers({ stockingItems }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Stocking Stuffers</h2>
      </div>
      <hr />
      <div className={styles.items}>
        {stockingItems.map(({ title, description, emoji, info }, index) => {
          return (
            <div className={styles.item} key={index}>
              <div className={styles.emojiContainer}>
                <h1>{emoji}</h1>
              </div>
              <div className={styles.text}>
                <p>
                  {title} <span>{description}</span>
                </p>

                {info && (
                  <div className={styles.info}>
                    <FontAwesomeIcon icon={["fas", "circle-info"]} />
                    <h5>{info}</h5>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
