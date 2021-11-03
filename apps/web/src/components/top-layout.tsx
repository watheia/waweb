import React, { HtmlHTMLAttributes } from "react"
import Head from "next/head"
import CssBaseline from "@mui/material/CssBaseline"
import Layout from "apps/web/src/components/layout"
import { theme } from "@watheia/app.context"
import { ThemeProvider } from "@mui/material/styles"

export type TopLayoutProps = HtmlHTMLAttributes<HTMLDivElement>

export default function TopLayout({ children }: TopLayoutProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>{children}</Layout>
      </ThemeProvider>
    </>
  )
}
