import React from "react"
import Head from "next/head"
import PropTypes from "prop-types"

export interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
}
const SEO = ({ title, description, keywords }: SEOProps) => (
  <Head>
    <html lang="en" />
    {title && <title>{title}</title>}
    {description && <meta name="description" content={description} />}
    {keywords && <meta name="keywords" content={keywords.join(", ")} />}
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="194x194" href="/favicon-194x194.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#04bfbf" />
    <meta name="apple-mobile-web-app-title" content="Watheia" />
    <meta name="application-name" content="Watheia" />
    <meta name="msapplication-TileColor" content="#fafbfb" />
    <meta name="theme-color" content="#fafbfb" />
  </Head>
)

export default SEO