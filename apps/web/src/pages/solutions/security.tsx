import React from "react"
import styles from "./security.module.css"

/* eslint-disable-next-line */
export interface SecurityProps { }

export function Security(props: SecurityProps) {
  return (
    <div className={styles.page}>
      <h1>Welcome to Security!</h1>
    </div>
  )
}

export default Security
