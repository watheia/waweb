/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import clsx from "clsx"
import NavLink from "./NavLink"

const solutions = [
  {
    name: 'Analytics',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '/solutions/analytics',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '/solutions/engagement',
    icon: CursorClickIcon,
  },
  { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '/solutions/integrations',
    icon: ViewGridIcon,
  },
]
const callsToAction = [
  { name: 'See Demos', href: '/demo', icon: PlayIcon },
  { name: 'All Solutions', href: '/solutions', icon: CheckCircleIcon },
  { name: 'Contact Sales', href: '/contact', icon: PhoneIcon },
]
const company = [
  { name: 'About', href: '/about', icon: InformationCircleIcon },
  { name: 'Customers', href: '#', icon: OfficeBuildingIcon },
  { name: 'Press', href: '#', icon: NewspaperIcon },
  { name: 'Careers', href: '#', icon: BriefcaseIcon },
  { name: 'Privacy', href: '#', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Community', href: '#', icon: UserGroupIcon },
  { name: 'Partners', href: '#', icon: GlobeAltIcon },
  { name: 'Guides', href: '#', icon: BookmarkAltIcon },
  { name: 'Materials', href: '#', icon: DesktopComputerIcon },
]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
      'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]

export const Header = () => {
  return (
    <Popover className="relative bg-white">
      <div className="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
      <div className="relative z-20">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2 sm:px-6 sm:py-3 lg:px-8 md:justify-start md:space-x-10">
          <div>
            <NavLink to="/" className="flex">
              <span className="sr-only">Workflow</span>
              <img
                className="h-8 w-auto sm:h-10"
                src="/images/logo.svg"
                alt=""
              />
            </NavLink>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={clsx(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={clsx(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
                        <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                          {solutions.map((item) => (
                            <NavLink
                              key={item.name}
                              to={item.href}
                              className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-blue-100"
                            >
                              <div className="flex md:h-full lg:flex-col">
                                <div className="flex-shrink-0">
                                  <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </span>
                                </div>
                                <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                                  <div>
                                    <p className="text-base font-medium text-gray-900">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                  <p className="mt-2 text-sm font-medium text-teal-600 lg:mt-4">
                                    Learn more <span aria-hidden="true">&rarr;</span>
                                  </p>
                                </div>
                              </div>
                            </NavLink>
                          ))}
                        </div>
                        <div className="bg-blue-100 border-t">
                          <div className="max-w-7xl mx-auto space-y-6 px-4 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-6 lg:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 p-3 flex items-center rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <NavLink to="/blog">
                Blog
              </NavLink>
              <NavLink to="/help-center">
                Support
              </NavLink>
              <Popover>
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={clsx(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={clsx(
                          open ? 'text-gray-600' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 -translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 -translate-y-1"
                    >
                      <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
                        <div className="absolute inset-0 flex">
                          <div className="bg-white w-1/2" />
                          <div className="bg-gray-50 w-1/2" />
                        </div>
                        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                          <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Company</h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {company.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <NavLink
                                      to={item.href}
                                      className="-m-3 p-3 flex items-center rounded-md hover:bg-blue-100"
                                    >
                                      <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                      <span className="ml-4">{item.name}</span>
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">Resources</h3>
                              <ul role="list" className="mt-5 space-y-6">
                                {resources.map((item) => (
                                  <li key={item.name} className="flow-root">
                                    <NavLink
                                      to={item.href}
                                      className="-m-3 p-3 flex items-center rounded-md hover:bg-blue-100"
                                    >
                                      <item.icon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                                      <span className="ml-4">{item.name}</span>
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </nav>
                          <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                            <div>
                              <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                From the blog
                              </h3>
                              <ul role="list" className="mt-6 space-y-6">
                                {blogPosts.map((post) => (
                                  <li key={post.id} className="flow-root">
                                    <NavLink to={post.href} className="-m-3 p-3 flex rounded-lg hover:bg-blue-100">
                                      <div className="hidden sm:block flex-shrink-0">
                                        <img className="w-32 h-20 object-cover rounded-md" src={post.imageUrl} alt="" />
                                      </div>
                                      <div className="w-0 flex-1 sm:ml-8">
                                        <h4 className="text-base font-medium text-gray-900 truncate">{post.name}</h4>
                                        <p className="mt-1 text-sm text-gray-500">{post.preview}</p>
                                      </div>
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-6 text-sm font-medium">
                              <NavLink to="/blog" className="text-teal-700 hover:text-teal-500">
                                {' '}
                                View all posts <span aria-hidden="true">&rarr;</span>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <div className="flex items-center md:ml-12">
              <NavLink to="/auth">
                Sign in
              </NavLink>
            </div>
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
          className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 sm:pb-8">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-8 w-auto"
                    src="/images/logo.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6 sm:mt-8">
                <nav>
                  <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                    {solutions.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center p-3 rounded-lg hover:bg-blue-100"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-teal-500 text-white sm:h-12 sm:w-12">
                          <item.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div className="ml-4 text-base font-medium text-gray-900">{item.name}</div>
                      </NavLink>
                    ))}
                  </div>
                  <div className="mt-8 text-base">
                    <NavLink to="/solutions" className="font-medium text-teal-600 hover:text-teal-500">
                      {' '}
                      Learn More <span aria-hidden="true">&rarr;</span>
                    </NavLink>
                  </div>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                <NavLink to="#">
                  Blog
                </NavLink>

                <NavLink to="/support">
                  Support
                </NavLink>

                <NavLink to="/about">
                  About
                </NavLink>

                <NavLink to="/resources">
                  Resources
                </NavLink>

                <NavLink to="/contact">
                  Contact Sales
                </NavLink>
              </div>
              <div className="mt-6">
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <NavLink to="/auth" className="text-teal-600 hover:text-teal-500">
                    Sign in
                  </NavLink>
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