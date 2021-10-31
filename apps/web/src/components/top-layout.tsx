import React, { HtmlHTMLAttributes } from "react"
import PropTypes from "prop-types"
import Head from "next/head"
import CssBaseline from "@mui/material/CssBaseline"
import { Global, css } from "@emotion/react"

import Layout from "apps/web/src/components/layout"
import { Provider } from "apps/web/src/components/provider"
import { defaultTheme } from "apps/web/src/lib/theme"

export type TopLayoutProps = HtmlHTMLAttributes<HTMLDivElement>

export default function TopLayout({ children }: TopLayoutProps) {
  const showSearch = false
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Provider theme={defaultTheme} defaultColorScheme="light">
        <CssBaseline />
        <Global
          styles={css`
            @font-face {
              font-family: "adobe-clean";
              src: url("https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3")
                  format("woff2"),
                url("https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3")
                  format("woff"),
                url("https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3")
                  format("opentype");
              font-display: swap;
              font-style: normal;
              font-weight: 400;
            }
            @font-face {
              font-family: "adobe-clean";
              src: url("https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3")
                  format("woff2"),
                url("https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3")
                  format("woff"),
                url("https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3")
                  format("opentype");
              font-display: swap;
              font-style: italic;
              font-weight: 400;
            }
            @font-face {
              font-family: "adobe-clean";
              src: url("https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3")
                  format("woff2"),
                url("https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3")
                  format("woff"),
                url("https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3")
                  format("opentype");
              font-display: swap;
              font-style: normal;
              font-weight: 700;
            }
            @font-face {
              font-family: "adobe-clean";
              src: url("https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3")
                  format("woff2"),
                url("https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3")
                  format("woff"),
                url("https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3")
                  format("opentype");
              font-display: swap;
              font-style: normal;
              font-weight: 300;
            }
            @font-face {
              font-family: "adobe-clean-serif";
              src: url("https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3")
                  format("woff2"),
                url("https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3")
                  format("woff"),
                url("https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3")
                  format("opentype");
              font-display: swap;
              font-style: normal;
              font-weight: 900;
            }
            html,
            body {
              margin: 0;
              text-size-adjust: none;
              overscroll-behavior: auto contain;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              ${showSearch && "overflow: hidden;"}
            }
            *[hidden] {
              display: none !important;
            }
          `}
        />
        <Layout>{children}</Layout>
      </Provider>
    </>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node
}
