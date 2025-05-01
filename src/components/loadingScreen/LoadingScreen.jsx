import { useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState(false);
  const fullText = "Welcome to CT's portfolio!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={
        text.length === fullText.length
          ? `${styles.loadingScreen} ${styles.hidden}`
          : styles.loadingScreen
      }
    >
      <div className={styles.text}>
        {text}
        <span className={styles.pointer}>|</span>
      </div>
    </div>
  );
};
