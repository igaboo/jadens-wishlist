import styles from "./Hero.module.scss";

import { urlFor } from "../../lib/client";

export function Hero({ image, title, description, linkColor }) {
  return (
    <header className={styles.header}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={urlFor(image)}
        alt="profile"
        style={{ border: `3px solid ${linkColor.hex}` }}
      />
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}
