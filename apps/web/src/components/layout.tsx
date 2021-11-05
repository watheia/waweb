import React, { HtmlHTMLAttributes } from "react"
import clsx from "clsx"
import Header from "./header"
import Footer from "./footer"
import Alert from "./alert"
import Meta from "./meta"

/* eslint-disable-next-line */
export type LayoutProps = { preview?: boolean } & HtmlHTMLAttributes<HTMLDivElement>

export function Layout({ children, className, preview = false, ...props }: LayoutProps) {
  return (
    <>
      <Meta />
      <div className={clsx("100-vh", className)} {...props}>
        <Alert preview={preview} />
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
