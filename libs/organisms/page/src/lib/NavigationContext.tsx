import React, { ReactNode, createContext, useState } from "react"

export type NavDispatch = React.Dispatch<any>

interface Props {
  children: ReactNode
}

const NavStateContext = createContext<string | undefined>(undefined)
const NavDispatchContext = createContext<NavDispatch | undefined>(undefined)

const NavigationContextProvider = ({ children }: Props) => {
  const [activeRoute, navigate] = useState("/")
  return (
    <NavDispatchContext.Provider value={navigate}>
      <NavStateContext.Provider value={activeRoute}>{children}</NavStateContext.Provider>
    </NavDispatchContext.Provider>
  )
}

export const usePaginationState = () => {
  const state = React.useContext(NavStateContext)
  return state
}

export const usePaginationDispatch = () => {
  const dispatch = React.useContext(NavDispatchContext)
  return dispatch
}

export default NavigationContextProvider
