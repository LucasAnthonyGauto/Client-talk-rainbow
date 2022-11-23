import styles from "./styles.module.css";

const BoxChat = () => {
  return (
    <div className={styles["divChatRoom"]}>
      <ul className={styles["chatRoom"]}>
        <li className={styles["message"]}>
          <ul className={styles["received"]}>
            <li>Gero</li>
            <li>Hola gente</li>
          </ul>
        </li>
        <li className={styles["message"]}>
          <ul className={styles["received"]}>
            <li>Nella</li>
            <li>Hola ustedes</li>
          </ul>
        </li>
        <li className={styles["message"]}>
          <ul className={styles["send"]}>
            <li>Yo</li>
            <li>Hola como andan?</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default BoxChat;
