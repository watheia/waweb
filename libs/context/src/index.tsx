import React from "react"

import DocumentContext from "./lib/DocumentContext"
import PaginationContext from "./lib/PaginationContext"

export * from "./constants"
export * from "./supabaseClient"

type ContextProviderProps = {
  children: React.ReactNode | React.ReactNode[] | null
}

const ContextProvider = ({ children }: ContextProviderProps) => (
  <DocumentContext>
    <PaginationContext>{children}</PaginationContext>
  </DocumentContext>
)

export default ContextProvider
