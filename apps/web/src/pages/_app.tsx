import * as React from "react"
import { AppProps } from "next/app"
import TopLayout from "../components/TopLayout"

import "../styles/index.css"

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <TopLayout>
      <Component {...pageProps} />
    </TopLayout>
  )
}
