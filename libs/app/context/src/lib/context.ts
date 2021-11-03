import { createContext } from "react"
import { IAppContext, IUser } from "@watheia/app.model"
import { createMuiTheme } from "@watheia/app.theme"
// import { PrismaClient } from "@prisma/client"
import { createClient } from "@supabase/supabase-js"

export const theme = createMuiTheme("light")

// export const prisma = new PrismaClient()

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
)

export const principal: IUser = {
  id: "8d0fd2b3-9ca7-4d9e-a95f-9e13dded323e",
  name: "supabot",
  email: "admin@watheia.org"
}

export const context = createContext<IAppContext>({
  count: 0,
  increment: (s: number) => s + 1
})
