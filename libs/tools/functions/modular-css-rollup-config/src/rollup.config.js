const rollup = require('rollup');
const css = require('@modular-css/rollup');

const modularCssOptions = {
  styleExport: true,
  inline: false,
  json: true,
};

/**
 *
 * @param {rollup.RollupOptions} options
 * @returns {rollup.RollupOptions}
 */
function getRollupOptions(options) {
  const extraGlobals = {
    react: 'React',
    'react-dom': 'ReactDOM',
    'styled-components': 'styled',
    '@emotion/react': 'emotionReact',
    '@emotion/styled': 'emotionStyled',
  };
  if (Array.isArray(options.output)) {
    options.output.forEach((o) => {
      o.globals = { ...o.globals, ...extraGlobals };
    });
  } else {
    options.output = {
      ...options.output,
      globals: {
        ...options.output.globals,
        ...extraGlobals,
      },
    };
  }

  options.plugins = [...(options.plugins ?? []), css(modularCssOptions)];
  return options;
}

module.exports = getRollupOptions;
