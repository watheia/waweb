import React, { HtmlHTMLAttributes } from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import CssBaseline from "@mui/material/CssBaseline"

import Layout from "apps/web/src/components/layout"
import { Provider } from "apps/web/src/components/provider"
import { defaultTheme } from "apps/web/src/lib/theme"

import typogrophy from "apps/web/src/styles/components/typography/vars.module.css"

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
      <Provider theme={defaultTheme} defaultColorScheme="light">
        <CssBaseline />
        <div className={typogrophy.wa}>
          <Layout>{children}</Layout>
        </div>
      </Provider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node
}
