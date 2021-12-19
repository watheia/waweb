import {
  WebpackConfigMutator,
  WebpackConfigTransformer,
} from '@teambit/webpack';
import { inspect } from 'util';
import { ModularCssOptions } from '.';

export type ModularCssTransformersType = {
  previewConfigTransformer: WebpackConfigTransformer;
  devServerConfigTransformer: WebpackConfigTransformer;
};

export function useModularCssTransformer(
  options: ModularCssOptions
): ModularCssTransformersType {
  function addModularCss(config: WebpackConfigMutator): WebpackConfigMutator {
    console.log(inspect(config.raw.module?.rules, { depth: 6 }));
    // const postcssLoaders = JSONPath<any[]>({
    //   json: config.raw,
    //   path: "$.module.rules..[?(@ && @.loader && @.loader.includes('postcss-loader'))]",
    // });
    // const postcssOptions = JSONPath<any[]>({
    //   json: postcssLoaders,
    //   path: '$..postcssOptions',
    // });

    // validatePostcss(postcssLoaders, postcssOptions);

    // postcssOptions.forEach((options) => {
    //   validateOnePostCssOptions(options);
    //   if (!options.plugins) options.plugins = [];
    //   const plugin = tailwindcssPlugin(tailwindConfigPath);
    //   options.plugins.unshift(plugin);
    // });
    return config;
  }

  const previewConfig: WebpackConfigTransformer = (
    config: WebpackConfigMutator
  ) => {
    return addModularCss(config);
  };

  const devServerConfig: WebpackConfigTransformer = (
    config: WebpackConfigMutator
  ) => {
    return addModularCss(config);
  };

  return {
    previewConfigTransformer: previewConfig,
    devServerConfigTransformer: devServerConfig,
  };
}

// function validatePostcss(loaders: any[], options: any[]) {
//   if (loaders.length > options.length) {
//     throw new Error(
//       `tailwind-bit env: failed to add tailwind to all postcss options.` +
//         ` Found ${loaders.length} postcss loaders, but only ${options.length} postcss options.` +
//         ` This probably means the webpack configuration of Bit itself has changed!`
//     );
//   }
//   if (options.length < 1)
//     throw new Error(
//       `tailwind-bit env: failed to add tailwind postcss options - found no postcss options or loaders` +
//         ` This probably means the webpack configuration of Bit itself has changed!`
//     );
// }

// function isPostcssOptions(obj: any): obj is PostcssOptions {
//   return !!obj && (obj.plugins === undefined || Array.isArray(obj.plugins));
// }

// function validateOnePostCssOptions(options: any) {
//   if (!isPostcssOptions(options)) {
//     const stringified = inspect(options, undefined, 5);
//     throw new Error(
//       `tailwind-bit env: failed to add tailwind plugin because this postcss options object is malformed: ${stringified}`
//     );
//   }
// }
