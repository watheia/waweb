import React, { HtmlHTMLAttributes } from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import theme from "../theme"
import Layout from "./layout"

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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>{children}</Layout>
      </ThemeProvider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node
}
