import React from "react"
import styles from "./index.module.css"

/* eslint-disable-next-line */
export interface IndexProps {}

export function Index(props: IndexProps) {
  return (
    <div className={styles.page}>
      <h1>Welcome to Index!</h1>
    </div>
  )
}

export default Index
