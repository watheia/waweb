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
          content="width=device-width,minimum-scale=1,initial-scale=1"
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
