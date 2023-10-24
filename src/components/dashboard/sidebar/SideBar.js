import React from "react";
import styles from "./Sidebar.module.scss";
import home from "../../../assets/SVGs/home.svg";
import flash from "../../../assets/SVGs/flash.svg";
import note from "../../../assets/SVGs/note.svg";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
export default function SideBar() {
  const wtf1 = useRef();
  const wtf2 = useRef();
  const floatingActionHandler = () => {
    console.log(wtf1.current);
  };
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

      <div
        onClick={() => floatingActionHandler()}
        className={styles["floating-action"]}
      >
        <span className={`${styles["floating-action__item"]} ${styles["floating-action__item--rotated"]}`}
        >|</span>
        <span className={styles["floating-action__item"]}>|</span>
      </div>
    </div>
  );
}
