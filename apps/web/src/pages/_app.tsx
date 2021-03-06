import * as React from "react"
import { AppProps } from "next/app"
import { ContextProvider } from "@watheia/context"
import Head from "next/head"
import "../styles/global.css"
import Layout from "../components/layout"

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <ContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ContextProvider>
    </>
  )
}
