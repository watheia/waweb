import { DEFAULT_AVATARS_BUCKET } from "@watheia/catalog"
import { ChangeEvent, useState } from "react"
import { AsyncStatus } from "@watheia/catalog"
import client from "../supabaseClient"

export type UploadAvatarResult = {
  status: string
  error?: string
  value?: string
}

export async function useAvatar(
  event: ChangeEvent<HTMLInputElement>
): Promise<UploadAvatarResult> {
  const [status, setStatus] = useState<AsyncStatus>("idle")
  try {
    setStatus("pending")
    if (!event.target.files || event.target.files.length === 0) {
      throw new Error("You must select an image to upload.")
    }

    const user = client.auth.user()
    if (!user) throw new Error("principal user not found. Did your login session expire?")
    const file = event.target.files[0]
    const fileExt = file.name.split(".").pop()
    const fileName = `${user.id}${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    const { error: uploadError } = await client.storage
      .from(DEFAULT_AVATARS_BUCKET)
      .upload(filePath, file)

    if (uploadError) {
      throw uploadError
    }

    const { error: updateError } = await client.from("profiles").upsert({
      id: user.id,
      avatar_url: filePath
    })

    if (updateError) {
      setStatus("error")
      return { status: "error", error: updateError.message }
    }

    return { status: "success", value: filePath }
  } catch (error) {
    if (error instanceof Error) {
      setStatus("error")
      console.error(error.message)
      return { status, error: error.message }
    }
  } finally {
    setStatus("idle")
    // eslint-disable-next-line no-unsafe-finally
    return { status: "idle" }
  }
}
