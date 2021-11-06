import Head from "next/head"
import { getURL } from "@watheia/utils"
import { useRouter } from "next/router"
import {
  LOCALE,
  META_DESCRIPTION,
  SITE_DESCRIPTION,
  SITE_NAME,
  PREVIEW_IMAGE_FALLBACK
} from "@watheia/app.context"

export interface SEOProps {
  title?: string
  url?: string
  description?: string
  image?: string
}

export const Meta = ({ title, url, description, image }: SEOProps): JSX.Element => {
  const router = useRouter()
  image = image || PREVIEW_IMAGE_FALLBACK
  title = title || SITE_NAME
  url = url || `${getURL()}${router?.asPath}`
  description = description || SITE_NAME
  return (
    <Head>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="robots" content="index, follow" />
      <meta key="googlebot" name="googlebot" content="index,follow" />
      <meta name="google" content="notranslate" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta
        name="keywords"
        content="webapp,microfrontend,agency,consulting,development,freelancer"
      />
      <meta property="og:locale" content={LOCALE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={SITE_DESCRIPTION} />
      <meta property="og:description" content={META_DESCRIPTION} />
      <meta property="og:url" content={getURL()} />
      <meta property="og:image" content={PREVIEW_IMAGE_FALLBACK} />
      <meta property="twitter:card" content={SITE_NAME} />
      <meta property="twitter:url" content={getURL()} />
      <meta property="twitter:title" content={SITE_DESCRIPTION} />
      <meta property="twitter:description" content={SITE_DESCRIPTION} />
      <meta property="twitter:image" content={PREVIEW_IMAGE_FALLBACK} />
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
      <link
        rel="icon"
        type="image/png"
        sizes="192x192"
        href="/android-chrome-192x192.png"
      />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#04bfbf" />
      <meta name="apple-mobile-web-app-title" content="Watheia" />
      <meta name="application-name" content="Watheia" />
      <meta name="msapplication-TileColor" content="#fafbfb" />
      <meta name="theme-color" content="#fafbfb"></meta>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `{
              "@context": "http://schema.org/",
              "@type": "Organization",
              "url": "https://watheia.app/",
              "logo": "https://cdn.watheia.org/assets/logo.png",
              "sameAs": [
                "https://waweb.vercel.app",
                "https://preview.watheia.app",
              ],
            }`
        }}
      />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  )
}

export default Meta
