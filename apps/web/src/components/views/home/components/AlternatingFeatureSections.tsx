import React from "react"
import { InboxIcon, SparklesIcon } from "@heroicons/react/solid"
import NavLink from "apps/web/src/components/nav-link"

const AlternatingFeatureSections = () => (
  <div className="relative pt-16 pb-32 overflow-hidden">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
    />
    <div className="relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <div>
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-400 to-teal-600">
                <InboxIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Stay on top of the latest trends in tech.
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Watheia Labs stays on top of the quickly changing winds in tech, so your
                skills will be ahead of the game. As a result, you will be ready for the Job
                market with next-gen skills that haven't even made it into the lesson plans.
              </p>
              <div className="mt-6">
                <NavLink
                  to="/contact/#waitlist"
                  className="inline-flex bg-gradient-to-r from-teal-400 to-teal-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-teal-900 hover:to-teal-700"
                >
                  Join Waitlist
                </NavLink>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-6">
            <blockquote>
              <div>
                <p className="text-base text-gray-500">
                  &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed diam. Sit orci
                  risus aenean curabitur donec aliquet. Mi venenatis in euismod ut.&rdquo;
                </p>
              </div>
              <footer className="mt-3">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-6 w-6 rounded-full"
                      src="/images/photo-1509783236416-c9ad59bae472.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text-base font-medium text-gray-700">
                    Marcia Hill, Digital Marketing Manager
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="/images/inbox-app-screenshot-1.jpg"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="mt-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <div>
            <div>
              <span className="h-12 w-12 rounded-md flex items-center justify-center bg-gradient-to-r from-teal-400 to-teal-600">
                <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
            </div>
            <div className="mt-6">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                Better understand your customers&apos; needs.
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Most projects that fail do so before a line of code is released.
                Universities and traditional academia will teach you how to build a thing
                right. Instead, we focus on how to build the right thing.
              </p>
              <div className="mt-6">
                <NavLink
                  to="/contact/#waitlist"
                  className="inline-flex bg-gradient-to-r from-teal-400 to-teal-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-teal-900 hover:to-teal-700"
                >
                  Join Waitlist
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src="/images/inbox-app-screenshot-2.jpg"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AlternatingFeatureSections
