import React, { createContext, useContext, ReactNode, useState, useEffect } from "react"
import { Session, User } from "@supabase/supabase-js"
import { supabase } from "./supabaseClient"
import { Auth } from "@supabase/ui"

const defaultUser = {
  id: "8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e",
  email: "admin@watheia.org",
  username: "supabot",
  app_metadata: {},
  user_metadata: {},
  aud: "",
  created_at: ""
}

/**
 * Fetch all roles for the current user
 * @param {function} setState Optionally pass in a hook or callback to set the state
 */
// const fetchUserRoles = async (setState: (arg0: any[] | null) => void) => {
//   try {
//     let { body } = await supabase.from("user_roles").select(`*`)
//     if (setState) setState(body)
//     return body
//   } catch (error) {
//     console.log("error", error)
//     return void 0
//   }
// }

interface IAuthContext {
  userLoaded: boolean
  user: User | null
  session: Session | null
  userRoles: string[]
  signIn: (email?: string, pass?: string) => void
  signOut: () => void
}

const AuthContext = createContext<IAuthContext>({
  userLoaded: false,
  user: null,
  session: null,
  userRoles: [],
  signIn: () => void 0,
  signOut: () => void 0
})

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [userLoaded, setUserLoaded] = useState<boolean>(false)
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [userRoles, setUserRoles] = useState<string[]>([])

  useEffect(() => {
    // console.log("AuthContext(user)", user)
    const session = supabase.auth.session()
    setSession(session)
    setUser(session?.user ?? null)
    setUserLoaded(session ? true : false)
    if (user) {
      supabase.auth.signIn({ ...user })
      // router.push("/channels/[id]", "/channels/1")
    }

    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.info("Auth State Changed:", event)
        setSession(session)
        const currentUser = session?.user
        setUser(currentUser ?? null)
        setUserLoaded(!!currentUser)
        if (currentUser) {
          // console.log("currentUser", currentUser)
          signIn(currentUser.id, currentUser.email)
          // router.push("/channels/[id]", "/channels/1")
        }
      }
    )

    return () => {
      authListener?.unsubscribe()
    }
  }, [user])

  const signIn = async (email: string = "", pass: string = "") => {
    // console.log("signIn(email, pass)", email, pass)
    setUser(defaultUser)
    // await fetchUserRoles((userRoles) =>
    //   setUserRoles(userRoles.map((userRole) => userRole.role))
    // )
  }

  const signOut = async () => {
    // console.log("signOut()")
    setUser(null)
    // const result = await supabase.auth.signOut()
    // router.push("/")
  }

  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <AuthContext.Provider
        value={{
          userLoaded,
          user,
          userRoles,
          session,
          signIn,
          signOut
        }}
      >
        {children}
      </AuthContext.Provider>
    </Auth.UserContextProvider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}

export default AuthContextProvider
