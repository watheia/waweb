import { HtmlHTMLAttributes } from "react"

/* This example requires Tailwind CSS v2.0+ */
export default function Container(props: HtmlHTMLAttributes<HTMLDivElement>) {
  return <div className="max-w-7xl mx-auto sm:px-6 lg:px-8" {...props}></div>
}
