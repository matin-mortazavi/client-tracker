import React from 'react'
import styles from "./SummeryReport.module.scss"
export default function SummeryReport() {
  return (
    <>
     <p className={styles["reports-item__title"]}>خلاصه گزارش</p>
          <p className={styles["reports-item__text"]}>
            اولین فعالیت خودت رو بساز.
          </p>
    </>
  )
}
