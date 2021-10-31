import * as React from "react"
import { AppProps } from "next/app"
import TopLayout from "../components/top-layout"

import "apps/web/src/styles/components/commons/index.css"
import "apps/web/src/styles/components/page/vars.css"
import "apps/web/src/styles/font-awesome.min.css"

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <TopLayout>
      <Component {...pageProps} />
    </TopLayout>
  )
}
