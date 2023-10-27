import styles from "./Hero.module.scss";

import { urlFor } from "../../lib/client";

export function Hero({ image, title, description, darkFont }) {
  return (
    <header className={styles.header}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={urlFor(image)} alt="profile" />
      <div className={styles.text}>
        <h2 style={{ color: darkFont ? "#000" : "#fff" }}>{title}</h2>
        <p style={{ color: darkFont ? "#00070" : "#fff70" }}>{description}</p>
      </div>
    </header>
  );
}
