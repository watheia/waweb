import { supabase } from "@watheia/app.context"

export async function signIn(email: string) {
  try {
    const { error, user } = await supabase.auth.signIn({ email })
    if (error) throw error
    console.log("user", user)
    alert("Check your email for the login link!")
  } catch (e: any) {
    console.log("Error thrown:", e.message)
    alert(e.error_description || e.message)
  }
}

export default signIn
