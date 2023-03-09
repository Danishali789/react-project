import React from 'react'
import styles from "./footer.module.scss"
export default function Footer() {
  return (
    <div className={"footer " + styles['mfooter']}>
      <div className={styles['footer-link']}>
        <a>Menus</a>
        <a>Adress</a>
        <a>Help</a>
        <a>About Us</a>
      </div>
      <div className={styles['cright']}>
           <p>copyright 2023 All Right Reserved By Free html Templates</p>
      </div>
    </div>
  )
}
