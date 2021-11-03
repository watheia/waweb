import { supabase } from "@watheia/app.context"

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) console.error("Error logging out:", error.message)
}

export default signOut
