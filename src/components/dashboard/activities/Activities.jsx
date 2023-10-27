
import React from 'react'
import styles from "./Activities.module.scss"
import plus from "../../../assets/SVGs/Plus.svg"
import ActivityItem from './activityItem/ActivityItem'
export default function Events() {
  return (
    <div className={styles["events"]}>
    <div className={styles["events-details"]}>
      <p className={styles["events-title"]}> فعالیت ها</p>
    
    </div>
   
    <div className={styles["event-items"]}>
    

     <ActivityItem></ActivityItem>
     <ActivityItem></ActivityItem>
     <ActivityItem></ActivityItem>
     <ActivityItem></ActivityItem>
    </div>


  </div>
  )
}
