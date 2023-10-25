import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./Dashboard.module.scss";
// import SideBar from "../../components/dashboard/sidebar/SideBar";
// import SideBar from "../../components/Dashboard/sidebar/SideBar";
import SideBar from "../../components/sidebar/Sidebar";
import Reports from "../../components/reports/Reports";

export default function Dashboard() {
  return (
    <>
      {22 == 23 && <Navigate to={"/login"} />}
      <div className={styles["dashboard"]}>
        <div className={styles["sidebar"]}>
          <SideBar></SideBar>
        </div>
        <div className={styles["main-section"]}>

          <Reports></Reports>
          
          <div className={styles["roydad"]}></div>
          <div className={styles["activity"]}></div>
          <div className={styles["category"]}></div>

        </div>
        <div className={styles["user"]}></div>
      </div>
    </>
  );
}
