import { PrismaClient } from "@prisma/client"
import { SupabaseClient } from "@supabase/supabase-js"
import { IUser } from "./IUser"
import { Theme } from "@mui/system"

export interface IAppContext {
  /**
   * Global theme config
   */
  // theme: Theme

  /**
   * Reference to global prisma instance
   */
  // prisma: PrismaClient

  /**
   * Reference to global supabase instance
   */
  // supabase: SupabaseClient

  /**
   * The currently authenticated user, if any
   */
  // principal: IUser | false

  /**
   * Keep track of user session state (used for testing, ok to remove)
   */
  count: number

  /**
   * Increment the count by 1
   */
  increment: (s: number) => void
}
