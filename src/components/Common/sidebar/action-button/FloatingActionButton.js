import React from "react";
import { useState } from "react";
import styles from "./FloatingActionButton.module.scss";
import flash from "../../../../assets/SVGs/flash-side.svg";
import note from "../../../../assets/SVGs/note-side.svg";
import weight from "../../../../assets/SVGs/weight-side.svg";


export default function FloatingActionButton() {
  const [isRotated, setIsRotated] = useState(false);
  const rotatedClass = isRotated ? styles.rotated : "";
  const floatingActionHandler = () => {
    document.body.classList = "global-overlay";
    setIsRotated((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      {isRotated && <div className={styles["backdrop"]}></div>}
      <div
        className={`${styles["floating-action"]} ${rotatedClass}`}
        onClick={() => floatingActionHandler()}
      >
        <span
          className={`${styles["floating-action__item"]} ${styles["floating-action__item--rotated"]}`}
        >
          |
        </span>
        <span className={styles["floating-action__item"]}>|</span>
        <div className={styles["floating-action__sub-menu"]}>
          <div className={styles["sub-menu__container"]}>
            <div className={styles["sub-menu__img-container"]}>
              <img
                className={styles["sub-menu__item-icon"]}
                src={flash}
                alt="not"
              />
            </div>
            <p className={styles["sub-menu__item-text"]}>رویداد</p>
          </div>
          <div className={styles["sub-menu__container"]}>
            <div className={styles["sub-menu__img-container"]}>
              <img
                className={styles["sub-menu__item-icon"]}
                src={note}
                alt="not"
              />
            </div>
            <p className={styles["sub-menu__item-text"]}>نوع فعالیت</p>
          </div>

          <div className={styles["sub-menu__container"]}>
            <div className={styles["sub-menu__img-container"]}>
              <img
                className={styles["sub-menu__item-icon"]}
                src={weight}
                alt="not"
              />
            </div>
            <p className={styles["sub-menu__item-text"]}>فعالیت</p>
          </div>
        </div>
      </div>
    </>
  );
}
