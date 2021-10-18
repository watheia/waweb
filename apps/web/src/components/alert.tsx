import React, { useState } from "react"
import { XIcon } from '@heroicons/react/outline'
import { HtmlHTMLAttributes } from "react"

export type AlertProps = { preview?: boolean } & HtmlHTMLAttributes<HTMLDivElement>

const AlertContent = ({ preview }) => (
  <p className="text-white">
    {preview ? (
      <>
        This is page is a preview.{" "}
        <a
          href="/api/exit-preview"
          className="underline hover:text-cyan duration-200 transition-colors"
        >
          Click here
        </a>{" "}
        to exit preview mode.
      </>
    ) : (
      <>
        The source code for this site is{" "}
        <span className="block sm:ml-2 sm:inline-block">
          <a href="https://github.com/watheia/waweb" className="text-white font-medium underline"
            target="__blank">
            {' '}
            available on GitHub <span aria-hidden="true">&rarr;</span>
          </a>
        </span>
      </>
    )}
  </p>
)
export default function Alert({ preview }: AlertProps) {
  const [visible, setVisible] = useState<boolean>(true)
  return visible ? (
    <div className="relative bg-teal-600">
      <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
        <div className="pr-16 sm:text-center sm:px-16">
          <AlertContent preview={preview} />
        </div>
        <div className="absolute inset-y-0 right-0 pt-1 pr-1 flex items-start sm:pt-1 sm:pr-2 sm:items-start">
          <button
            type="button"
            className="flex p-2 rounded-md hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-white"
            onClick={() => setVisible(false)}
          >
            <span className="sr-only">Dismiss</span>
            <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  ) : null
}
