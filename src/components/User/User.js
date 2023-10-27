import React from 'react'
import { useState } from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import UserEvents from "./userEvents/UserEvents";
import styles from  "./User.module.scss";
import UserInfo from './userInfo/UserInfo';


export default function User() {

   
    const [selectedDay, setSelectedDay] = useState(null);
  return (
    <div className={styles['user-section']}> 
    <UserInfo></UserInfo>
       <Calendar
    
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
      locale="fa" // add this
    />
    <UserEvents></UserEvents>
    
        
    </div>
  )
}
