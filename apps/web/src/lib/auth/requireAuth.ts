/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/dist/client/router"
import { useEffect } from "react"
import { useSession } from "./useSession"

export const requireAuth = () => {
  const { session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push("/auth")
    }
  }, [session, router])
}
