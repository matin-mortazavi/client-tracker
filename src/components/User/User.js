import React from 'react'
import { Datepicker,Calendar } from '@ijavad805/react-datepicker';

import "./styles.css"
export default function User() {
const dropDowm = document.querySelectorAll("div")
    console.log(dropDowm);
  return (
    <div> 
        <Datepicker theme='green'></Datepicker>
        
    </div>
  )
}
