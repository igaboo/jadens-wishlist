import styles from "./StockingStuffers.module.scss";

export function StockingStuffers({ stockingItems }) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>Stocking Stuffers</h2>
        <p>{stockingItems.length} items</p>
      </div>
      <hr />
      <div className={styles.items}>
        {stockingItems.map(({ title, description, emoji }, index) => {
          return (
            <div className={styles.item} key={index}>
              <div className={styles.emojiContainer}>
                <h1>{emoji}</h1>
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
