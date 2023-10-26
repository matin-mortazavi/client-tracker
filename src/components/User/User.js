import React from 'react'
import { useState } from 'react';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

import "./styles.scss"
export default function User() {
const dropDowm = document.querySelectorAll("div")
    console.log(dropDowm);
    const [selectedDay, setSelectedDay] = useState(null);
  return (
    <div className='idk'> 
       <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
      locale="fa" // add this
    />
        
    </div>
  )
}
