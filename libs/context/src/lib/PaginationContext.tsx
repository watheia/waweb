import React from "react"

export type PaginationDispatch = React.Dispatch<any>

interface Props {
  children: React.ReactNode
}

const PaginationStateContext = React.createContext<number | undefined>(undefined)

const PaginationDispatchContext = React.createContext<PaginationDispatch | undefined>(
  undefined
)

const PaginationContextProvider = ({ children }: Props) => {
  const [pageCount, setPagination] = React.useState(1)
  return (
    <PaginationDispatchContext.Provider value={setPagination}>
      <PaginationStateContext.Provider value={pageCount}>
        {children}
      </PaginationStateContext.Provider>
    </PaginationDispatchContext.Provider>
  )
}

export const usePaginationState = () => {
  const state = React.useContext(PaginationStateContext)
  return state
}

export const usePaginationDispatch = () => {
  const dispatch = React.useContext(PaginationDispatchContext)
  return dispatch
}

export default PaginationContextProvider
