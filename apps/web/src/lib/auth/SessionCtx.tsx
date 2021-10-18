import { createContext } from "react"
import { Session, User } from "@supabase/supabase-js"

export type SessionCtxProps = {
  session?: Session
  user?: User
}

const defaultContext = {
  session: undefined,
  user: undefined
}

export const SessionCtx = createContext<SessionCtxProps>(defaultContext)

export default SessionCtx
