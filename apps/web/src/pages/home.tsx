import { useAuth } from "@watheia/app.context"
import Head from "next/head"
import Home from "../components/views/home"

const HomePage = (props: any) => {
  const { user, userLoaded, session } = useAuth()
  return (
    <>
      <Head>
        <title>Watheia Labs | We build micro frontends!</title>
      </Head>
      <Home />
    </>
  )
}

export default HomePage
