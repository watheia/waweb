// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require("@nrwl/next/plugins/with-nx")

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false
  },
  images: {
    domains: [
      "cdn.watheia.org",
      "www.datocms-assets.com",
      "a.storyblok.com",
      "images.ctfassets.net",
      "images.prismic.io",
      "cdn.aglty.io",
      "localhost" // For Strapi
    ],
    imageSizes: [24, 64, 300]
  }
}

module.exports = withNx(nextConfig)
