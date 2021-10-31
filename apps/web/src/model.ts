import { HtmlHTMLAttributes } from "react"

export type Nullable = undefined | null
export type Primitive = string | number | bigint | boolean | Nullable
export type JSON = { [key: string]: JSON | JSON[] | Primitive | Primitive[] }

export interface Meta {
  title?: string
  description?: string
  keywords?: string[]
  photo?: string | URL
}

export interface PageProps extends HtmlHTMLAttributes<HTMLDivElement> {
  meta?: Meta
}
