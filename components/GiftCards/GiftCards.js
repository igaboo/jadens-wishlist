import styles from "./GiftCards.module.scss";

export function GiftCards({ giftCards, linkColor }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.header}>
        <h2>Gift Cards</h2>
      </div>
      <div className={styles.items}>
        {giftCards?.map(({ title, link }, index) => {
          return (
            <div className={styles.item} key={index}>
              <a href={link} target="_blank" rel="noreferrer">
                {title}
              </a>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
