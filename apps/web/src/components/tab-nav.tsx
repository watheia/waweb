import React, { HtmlHTMLAttributes } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import clsx from "clsx"

/**
 * Returns true if activePath starts with href,
 * only if activePath !== "/", otherwise returns true if
 * path is exactlty "/"
 *
 * @param activePath
 * @param href
 * @returns
 */
function isActive(activePath: string, href: string): boolean {
  if (activePath === "/") return href === "/"
  else return activePath.startsWith(href)
}

export interface TabItem {
  label: string
  href: string
  active?: boolean
}

export type TabNavProps = {
  items: TabItem[]
} & HtmlHTMLAttributes<HTMLDivElement>

const Tab = ({ href, label, active = false }: TabItem) => {
  const className = clsx(
    active
      ? "border-teal-500 text-gray-900"
      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
    "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
  )
  return (
    <Link href={href}>
      <a className={className}>{label}</a>
    </Link>
  )
}

export const TabNav = ({ items, ...props }: TabNavProps) => {
  const router = useRouter()
  const activePath = router?.asPath ?? "/"
  return (
    <div {...props}>
      {items.map((it) => (
        <Tab {...it} active={isActive(activePath, it.href)} />
      ))}
    </div>
  )
}
