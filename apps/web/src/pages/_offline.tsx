import React from "react"
import Link from "next/link"

/* This example requires Tailwind CSS v2.0+ */
export default function NotFoundPage() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex-shrink-0 flex justify-center">
            <span className="sr-only">Workflow</span>
            <img className="h-12 w-auto" src="/images/icon.png" alt="Watheia" />
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                Client Offline.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                You appear to be disconnected from the service bus, we will restablish
                realtime services as soon as possible.
              </p>
            </div>
          </div>
        </main>
        <footer className="flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex justify-center space-x-4">
            <Link href="/support">
              <a className="text-sm font-medium text-gray-500 hover:text-gray-600">
                Support
              </a>
            </Link>
            <span className="inline-block border-l border-gray-300" aria-hidden="true" />
            <Link href="/status">
              <a className="text-sm font-medium text-gray-500 hover:text-gray-600">
                Status
              </a>
            </Link>
            <span className="inline-block border-l border-gray-300" aria-hidden="true" />
            <a
              href="https://twitter.com/watheia"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-gray-500 hover:text-gray-600"
            >
              Twitter
            </a>
          </nav>
        </footer>
      </div>
    </>
  )
}
