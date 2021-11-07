import * as React from "react"
import { AppProps } from "next/app"
import { Page } from "@waweb/organisms.page"
import Head from "next/head"
import Layout from "../components/layout"
import { darkTheme } from "@watheia/theme"
import "@watheia/theme.styles/index.css"

export default function MyApp(props) {
  const { Component, pageProps } = props
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Page theme={darkTheme} colorScheme="dark">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Page>
    </>
  )
}
