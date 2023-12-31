import React from "react";
import { Navigate } from "react-router-dom";
import styles from "./Dashboard.module.scss";

import SideBar from "../../components/Common/sidebar/Sidebar";
import Reports from "../../components/dashboard/reports/Reports";
import Events from "../../components/dashboard/events/Events";
import Activities from "../../components/dashboard/activities/Activities"
import User from "../../components/User/User";
import ActivityCategory from "../../components/dashboard/activityCategory/ActivitiyCategory"

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
