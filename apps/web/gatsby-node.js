/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// const { cssModuleRegex } = require('@teambit/webpack.modules.style-regexps');
// const CSSPlugin = require('@modular-css/webpack/plugin');

// // You can delete this file if you're not using it
// exports.onCreateWebpackConfig = ({
//   stage,
//   rules,
//   loaders,
//   plugins,
//   actions,
// }) => {
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: cssModuleRegex,
//           use: [
//             '@modular-css/webpack/loader',
//             // You don't need to add the matching ExtractText plugin
//             // because gatsby already includes it and makes sure it's only
//             // run at the appropriate stages, e.g. not in development
//             // loaders.miniCssExtract(),
//             // loaders.css({ importLoaders: 1 }),
//             // the postcss loader comes with some nice defaults
//             // including autoprefixer for our configured browsers
//             loaders.postcss(),
//             // `less-loader`,
//           ],
//         },
//       ],
//     },
//     plugins: [
//       plugins.define({
//         __DEVELOPMENT__: stage === `develop` || stage === `develop-html`,
//       }),
//       // new CSSPlugin({
//       //   css: './index.css',
//       //   json: './vss-module.json',
//       // }),
//     ],
//   });
// };
