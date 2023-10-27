import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Attribute.module.scss";

export function Attribute({ tag, value, icon }) {
  return (
    <div className={styles.attribute}>
      <FontAwesomeIcon icon={["fas", icon ? icon : "circle-right"]} />
      <p>
        {tag}
        <span>{value}</span>
      </p>
    </div>
  );
}
