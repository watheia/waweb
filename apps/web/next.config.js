// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx")

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true
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
  }
}

module.exports = withNx(nextConfig)
