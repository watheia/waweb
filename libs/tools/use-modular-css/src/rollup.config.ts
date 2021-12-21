import css from '@modular-css/rollup';
import { RollupOptions } from 'rollup';

export const extraGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
  'styled-components': 'styled',
  '@emotion/react': 'emotionReact',
  '@emotion/styled': 'emotionStyled',
};

/**
 *
 * @param {RollupOptions} options
 * @returns {RollupOptions}
 */
export default function configureRollup(options: RollupOptions) {
  if (Array.isArray(options.output)) {
    options.output.forEach((o) => {
      o.globals = { ...o.globals, ...extraGlobals };
    });
  } else {
    options.output = {
      ...options.output,
      globals: {
        ...options.output?.globals,
        ...extraGlobals,
      },
    };
  }

  options.plugins = [
    ...(options.plugins ?? []),
    css({ map: { inline: false } }),
  ];
  return options;
}
