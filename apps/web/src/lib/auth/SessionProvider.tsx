import { ReactNode, useEffect, useState } from "react"
import { SessionCtx } from "./SessionCtx"

import { supabase } from "@watheia/app.context"
import { Session, User } from "@supabase/supabase-js"

export type SessionProviderProps = {
  children: ReactNode | ReactNode[] | null
} & JSX.IntrinsicAttributes

export const SessionProvider = (props: SessionProviderProps) => {
  const [session, setSession] = useState<Session>()
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const session = supabase.auth.session()
    setSession(session ?? undefined)
    setUser(session?.user ?? undefined)
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.info("EVENT: ", event)
        setSession(session ?? undefined)
        setUser(session?.user ?? undefined)
      }
    )

    return () => {
      authListener?.unsubscribe()
    }
  }, [])

  const value = {
    session,
    user
  }

  return <SessionCtx.Provider value={value} {...props} />
}
