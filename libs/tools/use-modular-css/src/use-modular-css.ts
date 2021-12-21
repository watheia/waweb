import {
  WebpackConfigMutator,
  WebpackConfigTransformContext,
  WebpackConfigTransformer,
} from '@teambit/webpack';
import { ProcessOptions } from 'postcss';
import { inspect } from 'util';
import { RuleSetRule } from 'webpack';
import {
  cssModuleRegex,
  lessModuleRegex,
  sassModuleRegex,
} from '@teambit/webpack.modules.style-regexps';

export const cssModuleMatchers = [
  cssModuleRegex,
  sassModuleRegex,
  lessModuleRegex,
];

export type ModularCssWebpackTransform = {
  previewTransform: WebpackConfigTransformer;
  devServerTransform: WebpackConfigTransformer;
};

export function useModularCss(
  options: ProcessOptions
): ModularCssWebpackTransform {
  console.log('*****css*********');
  console.log(inspect(options, { depth: 6 }));

  function addModularCss(
    config: WebpackConfigMutator,
    context: WebpackConfigTransformContext
  ): WebpackConfigMutator {
    console.log('*****webpack*********');
    console.log(config.raw, context);

    const oneOfRules = (config.raw?.module?.rules ?? []).find(
      (rule: RuleSetRule | '...') => typeof rule === 'object' && !!rule.oneOf
    );

    // throw error if unexpected reseults
    if (
      typeof oneOfRules === 'object' &&
      typeof oneOfRules.oneOf === 'object'
    ) {
      findCssRule(oneOfRules.oneOf).forEach((it) => {
        console.log('*****rule*********');
        console.log(inspect(it, { depth: 6 }));
      });
    } else {
      throw new Error('Unable to select oneOf in current weback config');
    }

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

  const previewTransform: WebpackConfigTransformer = (
    config: WebpackConfigMutator,
    context: WebpackConfigTransformContext
  ) => {
    return addModularCss(config, context);
  };

  const devServerTransform: WebpackConfigTransformer = (
    config: WebpackConfigMutator,
    context: WebpackConfigTransformContext
  ) => {
    return addModularCss(config, context);
  };

  return {
    previewTransform,
    devServerTransform,
  };
}

// /**
//  * Transformation for the preview only
//  * @param config
//  * @param context
//  * @returns
//  */
// export const previewConfigTransformer: WebpackConfigTransformer = (
//   config: WebpackConfigMutator,
//   context: WebpackConfigTransformContext
// ) => {
// // const newConfig = commonTransformation(config, context);
// const oneOfRules = config.raw.module.rules.find((rule: any) => !!rule.oneOf);
// const cssRule = findCssRule(oneOfRules.oneOf);
// console.log('*****PROD*********');
// console.log(inspect(cssRule, { depth: 99 }));
// console.log('*****PROD*********');
// return config;
// };

// /**
//  * Transformation for the dev server only
//  * @param config
//  * @param context
//  * @returns
//  */
// export const devServerConfigTransformer: WebpackConfigTransformer = (
//   config: WebpackConfigMutator,
//   context: WebpackConfigTransformContext
// ) => {
//   const newConfig = commonTransformation(config, context);
//   const cssRule = findCssRule(newConfig.raw.module.rules);
//   console.log('*****DEV*********');
//   console.log(inspect(cssRule, { depth: 99 }));
//   console.log('*****DEV*********');
//   return newConfig;
// };

function findCssRule(rules: Array<any>, testMatchers = cssModuleMatchers) {
  return rules.filter((rule) => rule.test && testMatchers.includes(rule.test));
}

// function excludeStCssFromRule(rule, excluder = /\.st\.css$/) {
//   rule.exclude = excluder;
//   return rule;
// }
