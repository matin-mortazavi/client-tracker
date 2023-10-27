import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./Dashboard.module.scss";

import SideBar from "../../components/sidebar/Sidebar";
import Reports from "../../components/reports/Reports";
import Events from "../../components/events/Events";
import Activities from "../../components/activities/Activities"
import User from "../../components/User/User";
import ActivityCategory from "../../components/activityCategory/ActivitiyCategory"

export default function Dashboard() {
  return (
    <>
      {!localStorage.getItem("userToken") && <Navigate to={"/login"} />}
      <div className={styles["dashboard"]}>
        <div className={styles["sidebar"]}>
          <SideBar></SideBar>
        </div>
        <div className={styles["main-section"]}>

          <Reports></Reports>
          
     <Events></Events>     
         <Activities></Activities>
         <ActivityCategory></ActivityCategory>
         
          <div className={styles["category"]}></div>

        </div>
        <div className={styles["user"]}>
          <User></User>
        </div>
      </div>
    </>
  );
}
