import styles from "./Hero.module.scss";

import { urlFor } from "../../lib/client";
import { Attribute } from "../Attribute/Attribute";

export function Hero({ image, title, description, darkFont }) {
  return (
    <header className={styles.header}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={urlFor(image)} alt="profile" />

      <div className={styles.text}>
        <h2 style={{ color: darkFont ? "#000" : "#fff" }}>{title}</h2>
        <p style={{ color: darkFont ? "#00000070" : "#ffffff70" }}>
          {description}
        </p>

        <div className={styles.attributes}>
          <Attribute
            tag="Email"
            value="jadenwatsond@gmail.com"
            icon="envelope"
          />
          <Attribute tag="Phone" value="530-333-7529" icon="phone" />
        </div>
      </div>
    </header>
  );
}
