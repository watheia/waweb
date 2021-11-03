import { useState } from "react"
import { supabase } from "@watheia/app.context"

export default async function updateProfile({ username, website }) {
  const [isLoading, setLoading] = useState<boolean>(false)
  try {
    setLoading(true)
    const user = supabase.auth.user()

    const updates = {
      id: user.id,
      username,
      website,
      updated_at: new Date()
    }

    const { error } = await supabase.from("profiles").upsert(updates, {
      returning: "minimal" // Don't return the value after inserting
    })

    if (error) {
      throw error
    }
  } catch (error) {
    alert(error.message)
  } finally {
    setLoading(false)
  }
}
