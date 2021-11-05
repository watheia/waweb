import React, { HtmlHTMLAttributes } from "react"
import Head from "next/head"
import NavContext from "./lib/NavigationContext"
import AuthContext from "./lib/AuthContext"
import { DefaultSeo } from "next-seo"
import seo from "./lib/default-seo"

export * from "./lib/constants"
export * from "./lib/supabaseClient"
export * from "./lib/AuthContext"

type ContextProviderProps = {
  children: React.ReactNode | React.ReactNode[] | null
}

export const ContextProvider = ({ children }: ContextProviderProps) => (
  <>
    <Head>
      <DefaultSeo {...seo} />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
    </Head>
    <AuthContext>
      <NavContext>{children}</NavContext>
    </AuthContext>
  </>
)

export default ContextProvider
