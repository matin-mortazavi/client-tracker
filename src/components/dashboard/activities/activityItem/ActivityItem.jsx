import React from 'react'
import styles from "./ActivityItem.module.scss"
import plus from "../../../../assets/SVGs/Plus.svg"
export default function EventItem() {
  return (
    <div className={styles["event-item"]}>
    <img src={plus} alt="" />
  </div>

  )
}
