import autoprefixer from 'autoprefixer';

/**
 * Add postcss mixins
 *
 * @param {boolean} [keepVars=false] keeps DNA variables
 * @param {boolean} [notNested=true] nest or don't nest
 * @param {boolean} [secondNotNested=true]  catch stray
 * @param {boolean} [diff=false]  perform a diff
 */
export function getProcessors(
  keepVars = false,
  notNested = true,
  secondNotNested = true,
  diff = false
) {
  return [
    require('postcss-import'),
    // require('postcss-mixins')({ mixins }),
    require('postcss-remapvars'),
    require('postcss-nested'),
    require('postcss-inherit'),
    // diff ? require('./plugins/postcss-varsonly')() : null,
    // require('postcss-logical')(),
    // require('./plugins/postcss-transform-logical')(),
    // require('postcss-dir-pseudo-class')(),
    // require('./plugins/postcss-custom-properties-passthrough')(),
    require('postcss-calc'),
    // keepVars ? require('./plugins/postcss-custom-properties-mapping') : null,
    // notNested
    //   ? require('./plugins/postcss-notnested')({ replace: '.waweb' })
    //   : null,
    require('postcss-svg'),
    // require('postcss-functions')({
    //   functions: {
    //     noscale: function (value) {
    //       return value.toString().toUpperCase();
    //     },
    //     percent: function (value) {
    //       return parseInt(value, 10) / 100;
    //     },
    //   },
    // }),
    // require('./plugins/postcss-strip-comments')({ preserveTopdoc: false }),
    require('postcss-dropunusedvars'),
    require('postcss-dropdupedvars'),
    require('postcss-droproot'),
    require('postcss-focus-ring'),
    // secondNotNested ? require('./plugins/postcss-notnested')() : null, // Second one to catch all stray &
    require('postcss-discard-empty'),
    autoprefixer({
      // browsers: [
      //   'IE >= 10',
      //   'last 2 Chrome versions',
      //   'last 2 Firefox versions',
      //   'last 2 Safari versions',
      //   'last 2 iOS versions',
      // ],
    }),
  ].filter(Boolean);
}

// const mixins = {
//   /**
//    * Generate typography t-shirt sizes
//    *
//    * @param {*} mixin mixin name
//    * @param {*} name class name
//    * @param {*} tokenName name of token
//    * @param {*} textTransformIgnore  ignore text transform
//    */
//   typographyTShirtSizes: function (
//     mixin,
//     name,
//     tokenName,
//     textTransformIgnore
//   ) {
//     if (!tokenName) {
//       var tokenName = getTShirtTokenName(name);
//     }

//     // overwrite-support for the Typography-V3 <em> & <strong> selectors
//     // sharing the same classname ".Detail". This will be added like
//     // ".Detail--sizeXL em {}"
//     addStrongAndEmphasizedChildren = name.includes('.Detail') ? true : false;

//     const output = getTypographySizes(
//       name,
//       tokenName,
//       textTransformIgnore,
//       addStrongAndEmphasizedChildren,
//       (showIndicatorBorder = false)
//     );
//     addNodesToCSS(mixin, output);
//   },

//   /**
//    * generate typography numeric sizes
//    * @param {*} mixin mixin name
//    * @param {*} name class name
//    * @param {*} tokenName name of token
//    * @param {*} textTransformIgnore  ignore text transform
//    */
//   typography: function (mixin, name, tokenName, textTransformIgnore) {
//     if (!tokenName) {
//       tokenName = name
//         .replace(/\.?([A-Z]|[0-9])/g, function (x, y) {
//           return '-' + y.toLowerCase();
//         })
//         .replace(/^-/, '');
//       tokenName = tokenName.replace('.', '');
//     }

//     const output = getTypographySizes(
//       name,
//       tokenName,
//       textTransformIgnore,
//       (addStrongAndEmphasizedChildren = false),
//       (showIndicatorBorder = false)
//     );
//     addNodesToCSS(mixin, output);
//   },

//   /**
//    * Generate typography margins for t-shirt sizes
//    *
//    * @param {*} mixin mixin name
//    * @param {*} name class name
//    * @param {*} tokenName name of token
//    */
//   typographyTShirtMargins: function (mixin, name, tokenName) {
//     if (!tokenName) {
//       var tokenName = getTShirtTokenName(name);
//     }
//     const output = getTypographyMargins(name, tokenName);
//     addNodesToCSS(mixin, output);
//   },

//   /**
//    * Generate typography margins for numeric sizes
//    *
//    * @param {*} mixin mixin name
//    * @param {*} name class name
//    * @param {*} tokenName name of token
//    */
//   typographyMargins: function (mixin, name, tokenName) {
//     if (!tokenName) {
//       tokenName = name
//         .replace(/\.?([A-Z]|[0-9])/g, function (x, y) {
//           return '-' + y.toLowerCase();
//         })
//         .replace(/^-/, '');
//       tokenName = tokenName.replace('.', '');
//     }
//     const output = getTypographyMargins(name, tokenName);
//     addNodesToCSS(mixin, output);
//   },

//   /**
//    * generate typography colors for t-shirt sizes
//    *
//    * @param {*} mixin mixin name
//    * @param {*} name class name
//    * @param {*} tokenName name of token
//    */
//   typographyTShirtColor: function (mixin, name, tokenName) {
//     if (!tokenName) {
//       var tokenName = getTShirtTokenName(name);
//     }
//     const output = getTypographyColor(
//       name,
//       tokenName,
//       (showIndicatorBackground = false)
//     );
//     addNodesToCSS(mixin, output);
//   },

//   /**
//    * generate typography colors for numeric sizes
//    *
//    * @param {*} mixin mixin name
//    * @param {*} name class name
//    * @param {*} tokenName name of token
//    */
//   typographyColor: function (mixin, name, tokenName) {
//     if (!tokenName) {
//       tokenName = name
//         .replace(/\.?([A-Z]|[0-9])/g, function (x, y) {
//           return '-' + y.toLowerCase();
//         })
//         .replace(/^-/, '');
//       tokenName = tokenName.replace('.', '');
//     }
//     const output = getTypographyColor(name, tokenName, false);
//     addNodesToCSS(mixin, output);
//   },
// };
