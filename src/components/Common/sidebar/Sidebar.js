import React, { useState } from "react";
import styles from "./Sidebar.module.scss";
import home from "../../../assets/SVGs/home.svg";
import flash from "../../../assets/SVGs/flash.svg";
import note from "../../../assets/SVGs/note.svg";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import FloatingActionButton from "./action-button/FloatingActionButton";
export default function SideBar() {
//   const [isRotated, setIsRotated] = useState(false);
//   const rotatedClass = isRotated ? styles.rotated : ""
//   const floatingActionHandler = () => {
//     setIsRotated((prevState) => {
//       return !prevState;
//     });
//     console.log(isRotated);
//   };
  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__icons"]}>
        <NavLink to={"/"}>
          <img className={styles["sidebar__icon"]} src={home} alt="" />
        </NavLink>
        <NavLink to={"/"}>
          <img className={styles["sidebar__icon"]} src={flash} alt="" />
        </NavLink>
        <NavLink to={"/"}>
          <img className={styles["sidebar__icon"]} src={note} alt="" />
        </NavLink>
      </div>
      <FloatingActionButton></FloatingActionButton>

      {/* <div
        className={`${styles["floating-action"]} ${rotatedClass}`}
        onClick={() => floatingActionHandler()}
      >
        <span
          className={`${styles["floating-action__item"]} ${styles["floating-action__item--rotated"]}`}
        >
          |
        </span>
        <span className={styles["floating-action__item"]}>|</span>
      </div> */}
    </div>
  );
}
