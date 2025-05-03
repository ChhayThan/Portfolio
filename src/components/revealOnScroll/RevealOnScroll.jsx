import { useRef, useEffect } from "react";
import styles from "./RevealOnScroll.module.css";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add(styles.visible);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  });
  return (
    <div ref={ref} className={styles.revealOnScroll}>
      {children}
    </div>
  );
};
