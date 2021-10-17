/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, ReactNode } from "react"
import { Popover, Transition } from "@headlessui/react"
import {
  ChartBarIcon,
  CursorClickIcon,
  DocumentReportIcon,
  MenuIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon
} from "@heroicons/react/outline"
import { ChevronDownIcon } from "@heroicons/react/solid"
import Link, { LinkProps } from "./Link"
import clsx from "clsx"
// import { useRouter } from "next/router"

export interface NavItem {
  name: string
  href: string
  description?: string
  icon?: any
}

const solutions: NavItem[] = [
  {
    name: "Analytics",
    description: "Get a better understanding of where your traffic is coming from.",
    href: "/solutions/analytics",
    icon: ChartBarIcon
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/solutions/engagement",
    icon: CursorClickIcon
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "/solutions/security",
    icon: ShieldCheckIcon
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "/solutions/integrations",
    icon: ViewGridIcon
  },
  {
    name: "Automation",
    description: "Build strategic funnels that will drive your customers to convert",
    href: "/solutions/automation",
    icon: RefreshIcon
  },
  {
    name: "GitOps",
    description: "Get detailed reports that will help you make more informed decisions ",
    href: "/solutions/gitops",
    icon: DocumentReportIcon
  }
]
const resources: NavItem[] = [
  {
    name: "Help Center",
    description: "Get all of your questions answered in our forums or contact support.",
    href: "/help-center"
  },
  {
    name: "Materials",
    description: "See design comps and reusable components.",
    href: "#"
  },
  {
    name: "Terms",
    description: "Understand how we take your privacy seriously.",
    href: "/terms-and-conditions"
  }
]

export type NavLinkProps = {} & LinkProps

const NavLink = ({ children, href, className, ...props }: NavLinkProps) => {
  // const router = useRouter()
  // const activeRoute = router?.asPath ?? "/"
  // const isActive = activeRoute !== "/" && activeRoute.startsWith(href)
  // const isActive = false
  return (
    <Link
      href={href}
      className={clsx("font-medium text-gray-500 hover:text-gray-900", className)}
      {...props}
    >
      {children}
    </Link>
  )
}
const OpenMenuButton = (props: Record<string, any>) => (
  <Popover.Button
    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
    {...props}
  >
    <span className="sr-only">Open menu</span>
    <MenuIcon className="h-6 w-6" aria-hidden="true" />
  </Popover.Button>
)

const CloseMenuButton = (props: Record<string, any>) => (
  <Popover.Button
    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
    {...props}
  >
    <span className="sr-only">Close menu</span>
    <XIcon className="h-6 w-6" aria-hidden="true" />
  </Popover.Button>
)

const Logo = (props: Record<string, any>) => (
  <Link href="/" className="flex" {...props}>
    <span className="sr-only">Workflow</span>
    <img
      className="h-8 w-auto sm:h-10"
      src="https://cdn.watheia.org/assets/icon.svg"
      alt=""
    />
  </Link>
)

type FlyoutMenuButtonProps = {
  open: boolean
  label: string
  [x: string]: any
}

const FlyoutMenuButton = ({ open, label, ...props }: FlyoutMenuButtonProps) => (
  <Popover.Button
    className={clsx(
      open ? "text-gray-900" : "text-gray-500",
      "group bg-white rounded-md inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
    )}
    {...props}
  >
    <span className="text-gray-500 group-hover:text-gray-900">{label}</span>
    <ChevronDownIcon
      className={clsx(
        open ? "text-gray-900" : "text-gray-500",
        "ml-2 h-5 w-5 group-hover:text-gray-900"
      )}
      aria-hidden="true"
    />
  </Popover.Button>
)

export const Header = () => {
  return (
    <Popover className="relative bg-white">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <Logo />
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <OpenMenuButton />
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <Popover.Group as="nav" className="flex space-x-10">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <FlyoutMenuButton open={open} label="Solutions" />
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                          {solutions.map((item) => (
                            <NavLink
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-100"
                            >
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                                <item.icon className="h-6 w-6" aria-hidden="true" />
                              </div>
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                        <div className="p-5 bg-gray-50 sm:p-8">
                          <a
                            href="#"
                            className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100"
                          >
                            <div className="flex items-center">
                              <div className="text-base font-medium text-gray-900">
                                Enterprise
                              </div>
                              <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-teal-100 text-teal-800">
                                New
                              </span>
                            </div>
                            <p className="mt-1 text-sm text-gray-500">
                              Empower your entire team with even more advanced tools.
                            </p>
                          </a>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </Popover.Group>
          <div className="flex items-center md:ml-12">
            <NavLink href="/auth">Sign In</NavLink>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="https://cdn.watheia.org/assets/icon.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <CloseMenuButton />
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-6">
                  {solutions.map((item) => (
                    <NavLink
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-100"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div className="ml-4 text-base font-medium text-gray-900">
                        {item.name}
                      </div>
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/blog">Blog</NavLink>
                <NavLink href="/contact">Contact</NavLink>
                {resources.map((item) => (
                  <NavLink key={item.name} href={item.href}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <div className="mt-6">
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer? <NavLink href="/auth">Sign in</NavLink>
                </p>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default Header
