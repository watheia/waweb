import { User } from "@supabase/supabase-js"

export interface IUser extends Partial<User> {
  name: string
  email: string
}
