// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require("next-compose-plugins")
const withNx = require("@nrwl/next/plugins/with-nx")
const withPWA = require("next-pwa")
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
})

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
    domains: ["cdn.watheia.org", "datocms-assets.com"]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // config.module.rules.push({
    //   test: /\.module\.css/,
    //   use: [
    //     defaultLoaders.babel,
    //     {
    //       loader: "css-loader",
    //       options: {

    //       }
    //     }
    //   ]
    // })

    // Important: return the modified config
    return config
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
    // scope: '/app',
    // sw: 'service-worker.js',
    //...
  }
}

module.exports = withPlugins([withBundleAnalyzer, withPWA, withNx], nextConfig)
