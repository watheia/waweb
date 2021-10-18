import { Profile } from "@watheia/catalog"
import client from "../supabaseClient"

export default async function getOwnProfile(): Promise<Profile> {
  try {
    const user = client.auth.user()

    const { data, error } = await client
      .from("profiles")
      .select(`username, website, avatar_url`)
      .eq("id", user?.id)
      .single()

    if (error || !data) {
      throw error || new Error("Data is missing")
    }

    return data
  } catch (error) {
    console.log("error", error)
    throw error
  }
}
