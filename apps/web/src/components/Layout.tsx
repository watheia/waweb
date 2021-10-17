import React, { HtmlHTMLAttributes } from "react"
import clsx from "clsx"
import Header from "./Header"
import Footer from "./Footer"

/* eslint-disable-next-line */
export type LayoutProps = HtmlHTMLAttributes<HTMLDivElement>

export function Layout({ children, className, ...props }: LayoutProps) {
  return (
    <div className={clsx(className)} {...props}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
