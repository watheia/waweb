import React, { HtmlHTMLAttributes } from "react"
import clsx from "clsx"
import Link from "next/link"

export type NavLinkProps = {
  to: string
} & HtmlHTMLAttributes<HTMLAnchorElement>

export const NavLink = ({ to, children, className, ...props }: NavLinkProps) => {
  return (
    <Link href={to}>
      <a className={clsx("text-base font-medium text-gray-500 hover:text-gray-900", className)} {...props}>
        {children}
      </a>
    </Link>
  )
}

export default NavLink