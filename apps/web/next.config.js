// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require("next-compose-plugins")
const withNx = require("@nrwl/next/plugins/with-nx")
const withPWA = require("next-pwa")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})

const DOMAINS = [
  "localhost:4200",
  "vercel.app",
  "watheia.app",
  "watheia.io",
  "watheia.org",
  "datocms-assets.com"
]

const DEFAULT_BREAKPOINTS = { S: 640, M: 768, L: 1024, XL: 1280, XXL: 1536 }

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true
  },
  images: {
    domains: DOMAINS,
    sizes: Object.values(DEFAULT_BREAKPOINTS)
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: false
      }
    ]
  },
  pwa: {
    dest: "public",
    disable: process.env.NODE_ENV !== "production",
    register: true
    // scope: "/home"
    // sw: 'service-worker.js',
    //...
  }
}

module.exports = withPlugins([withBundleAnalyzer, withPWA, withNx], nextConfig)
