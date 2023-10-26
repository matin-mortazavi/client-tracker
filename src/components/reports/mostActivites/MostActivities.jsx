import React from 'react'
import styles from "./MostActivities.module.scss"
export default function MostActivities() {
  return (
    <>
    <p className={styles["reports-item__title"]}>بیشترین‌ها</p>
          <p className={styles["reports-item__text"]}>
            اولین فعالیت خودت رو بساز.
          </p></>
  )
}
