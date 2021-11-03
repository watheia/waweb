import React, { ReactNode } from "react"
import { IAppContext } from "@watheia/app.model"
import { context } from "./context"

export type AppProviderProps = {
  /**
   * children to be rendered within this theme.
   */
  children: ReactNode
} & IAppContext

export function ContextProvider({ children, ...props }: AppProviderProps) {
  return <context.Provider value={{ ...props }}>{children}</context.Provider>
}
