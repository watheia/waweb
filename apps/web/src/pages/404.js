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
                Page not found.
              </h1>
              <p className="mt-2 text-base text-gray-500">
                Sorry, we couldn’t find the page you’re looking for. If you report this
                issue you may recieve a gift from us up to a $25 value.
              </p>
              <div className="mt-6">
                <Link href="/">
                  <a className="text-base font-medium text-teal-600 hover:text-teal-500">
                    Go back home<span aria-hidden="true"> &rarr;</span>
                  </a>
                </Link>
              </div>
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
