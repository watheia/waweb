import React, { HtmlHTMLAttributes } from "react"
import Link from "next/link"
import { Disclosure } from "@headlessui/react"
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
  else return href !== "/" && activePath.startsWith(href)
}

export interface MenuItem {
  label: string
  href: string
  active?: boolean
}

export type MenuNavProps = {
  items: MenuItem[]
} & HtmlHTMLAttributes<HTMLDivElement>

const Menu = ({ href, label, active = false }: MenuItem) => {
  const className = clsx(
    active
      ? "bg-teal-50 border-teal-500 text-teal-700"
      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700",
    "block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
  )
  return (
    <Disclosure.Button as={Link} href={href}>
      <a className={className}>{label}</a>
    </Disclosure.Button>
  )
}

export const MenuNav = ({ items, ...props }: MenuNavProps) => {
  const router = useRouter()
  const activePath = router?.asPath ?? "/"
  return (
    <div {...props}>
      {items.map((it, i) => (
        <Menu key={i} {...it} active={isActive(activePath, it.href)} />
      ))}
    </div>
  )
}
