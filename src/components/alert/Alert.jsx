import React from 'react'
import styles from"./container.module.scss"
export default function Alert(props) {
    const type = {
        ...props
    }
    console.log(console.log(type));
    const typeClass = {
        error: styles.error, // styles.error is the SCSS module class
        // Add more mappings for other types if needed
      };
    const typeClassName = typeClass[props.type];
  return (
    <>
    <div className= {`${styles.container} ${typeClassName}`}>
        <h2 className= {styles.title} >{props.title}</h2>
        <p className= {styles.text}>{props.text}</p>
     
      </div>
    <div className='backdrop'></div>
    </>
  )
}