import * as React from "react"
import Head from "next/head"
import { AppProps } from "next/app"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { CacheProvider, EmotionCache } from "@emotion/react"
import theme from "../theme"
import createEmotionCache from "../createEmotionCache"
import TopLayout from "../components/TopLayout"

import "../styles/index.css"

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <TopLayout>
        <Component {...pageProps} />
      </TopLayout>
    </CacheProvider>
  )
}
