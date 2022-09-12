import React from 'react'

import styles from "./MypageItem.module.css"

const MypageItem = ({id, value}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <input type="checkbox"></input>
        <div className={styles.list}>
          <h5 className={styles.name}>{value.title}</h5>
          <h5 className={styles.start}>{value.start}</h5>
          <h5 className={styles.end}>{value.end}</h5>
          <h5>{value.state}</h5>
        </div>
      </div>
    </div>
  )
}

export default MypageItem