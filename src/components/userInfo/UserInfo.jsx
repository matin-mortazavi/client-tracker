import React from 'react'
import styles from "./UserInfo.module.scss"
import  profile from "../../assets/images/profile.png"
import  notif from "../../assets/SVGs/notification-bing.svg"


export default function UserInfo() {
  return (
    <div className={styles['user-info']}>
        <div className={styles['user-info-content']}>
            <img className={styles["user-profile"]} src={profile} alt="" />
            <div className={styles["user-details"]}>
                <p className={styles["user-name"]}>متین مرتضوی</p>
                <span className={styles["user-events-count"]}>بدون رویداد</span>
            </div>

        </div>

        <img className={styles['user-notif-icon']} src={notif} alt="" />
       
    </div>
  )
}
