import React from 'react'
import styles from "./Events.module.scss"
import plus from "../../assets/SVGs/Plus.svg"
import EventItem from './eventItem/EventItem'
export default function Events() {
  return (
    <div className={styles["events"]}>
    <div className={styles["events-details"]}>
      <p className={styles["events-title"]}> رویداد ها</p>
    
    </div>
   
    <div className={styles["event-items"]}>
    

     <EventItem></EventItem>
     <EventItem></EventItem>
     <EventItem></EventItem>
    </div>


  </div>
  )
}
