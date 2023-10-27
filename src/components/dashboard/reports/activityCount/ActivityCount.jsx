import React from 'react'
import styles from "./ActivityCount.module.scss"
import emptyReport from "../../../../assets/SVGs/emptyreports.svg";
export default function ActivityCount() {
  return (
 
         <><div className={styles["reports-item"]}>
         <img className={styles["reports-icon"]} src={emptyReport} alt="" />
         <p className={styles["reports-icon__number"]}>‍۱</p>
        
         
</div>
<p className={styles["reports-item__text"]}>بدون فعالیت</p></>

   
  )
}
