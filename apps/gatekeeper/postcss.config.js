// apps/site/postcss.config.js
const { join } = require("path")

module.exports = {
  plugins: {
    tailwindcss: {
      config: join(__dirname, "tailwind.config.js")
    },
    autoprefixer: {},
    "postcss-nesting": {},
    "postcss-flexbugs-fixes": {
      "postcss-preset-env": {
        autoprefixer: {
          flexbox: "no-2009"
        },
        stage: 3,
        features: {
          "custom-properties": false
        }
      }
    }
  }
}
