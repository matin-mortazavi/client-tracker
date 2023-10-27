import React from "react";
import styles from "./Reports.module.scss";

import ActivityCount from "./activityCount/ActivityCount";
import MostActivities from "./mostActivites/MostActivities";
import SummeryReport from "./summeryReport/SummeryReport";
export default function Reports() {
  return (
    <div className={styles["reports"]}>
      <div className={styles["reports-details"]}>
        <p className={styles["reports-title"]}>گزارش ها</p>
        <div className={styles["reports-filtering"]}>
          <p className={styles["reports-filtering__item"]} href="">
            روزانه
          </p>
          <p className={styles["reports-filtering__item"]} href="">
            هفتگی
          </p>
          <p className={styles["reports-filtering__item"]} href="">
            ماهانه
          </p>
          <p className={styles["reports-filtering__item"]} href="">
            سالانه
          </p>
        </div>
      </div>
     
      <div className={styles["items"]}>
      

        <div className={styles["report-item"]}>
            <ActivityCount></ActivityCount>
        </div>
      
        <div className={styles["report-item"]}>
          <MostActivities></MostActivities>
        </div>
        <div className={styles["report-item"]}>
        
         <SummeryReport></SummeryReport>
        </div>
      </div>

      <div className={styles["events"]}>
    
      </div>

    </div>
  );
}
