import React, { HtmlHTMLAttributes } from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import CssBaseline from "@mui/material/CssBaseline"

import Layout from "./layout"
import { Provider } from "./provider"

export type TopLayoutProps = HtmlHTMLAttributes<HTMLDivElement>

export default function TopLayout({ children }: TopLayoutProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Provider>
        <CssBaseline />
        <Layout>{children}</Layout>
      </Provider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node
}
