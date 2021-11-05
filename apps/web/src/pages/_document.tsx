import React from "react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import createEmotionServer from "@emotion/server/create-instance"
import { HOME_OG_IMAGE_URL } from "@watheia/context"
import { createEmotionCache } from "@watheia/utils"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="application-name"
            content="Watheia Labs | We build micro frontends!"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta
            name="apple-mobile-web-app-title"
            content="Watheia Labs | We build micro frontends!"
          />
          <meta
            name="description"
            content="Get hands on experience and personilzed training from the best and brightest while contributing to real Open Source Software (OSS) projects used every day by companies like Google, Facebook, Amazon, Apple, and more!"
          />
          <meta name="format-detection" content="telephone=yes" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-config" content="/browserconfig.xml" />
          <meta name="msapplication-TileColor" content="#04BFBF" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#000000" />

          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-touch-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon-180x180.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="167x167"
            href="/apple-touch-icon-180x180.png"
          />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fafbfb" />
          <link rel="shortcut icon" href="/favicon.ico" />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="https://watheia.app/home" />
          <meta name="twitter:title" content="Watheia Labs | We build micro frontends!" />
          <meta
            name="twitter:description"
            content="Get hands on experience and personilzed training from the best and brightest while contributing to real Open Source Software (OSS) projects used every day by companies like Google, Facebook, Amazon, Apple, and more!"
          />
          <meta name="twitter:image" content={HOME_OG_IMAGE_URL} />
          <meta name="twitter:creator" content="@watheia" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Watheia Labs | We build micro frontends!" />
          <meta
            property="og:description"
            content="Get hands on experience and personilzed training from the best and brightest while contributing to real Open Source Software (OSS) projects used every day by companies like Google, Facebook, Amazon, Apple, and more!"
          />
          <meta
            property="og:site_name"
            content="Watheia Labs | We build micro frontends!"
          />
          <meta property="og:url" content="https://watheia.app/home" />
          <meta property="og:image" content={HOME_OG_IMAGE_URL} />
        </Head>
        <body className="loading wa">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache()
  const { extractCriticalToChunks } = createEmotionServer(cache)

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line react/display-name
      enhanceApp: (App: any) => (props) => <App emotionCache={cache} {...props} />
    })

  const initialProps = await Document.getInitialProps(ctx)
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(" ")}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags]
  }
}
