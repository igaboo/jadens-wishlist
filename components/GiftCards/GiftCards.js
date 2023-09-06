import styles from "./GiftCards.module.scss";

export function GiftCards({ giftCards, linkColor }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.header}>
        <h2>Gift Cards</h2>
        <p>{giftCards.length} items</p>
      </div>
      <hr />
      <div className={styles.items}>
        {giftCards?.map(({ title, link }, index) => {
          return (
            <div
              className={styles.item}
              key={index}
              style={{ backgroundColor: linkColor.hex + "20" }}
            >
              <p>
                <a href={link} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </p>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
