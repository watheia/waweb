import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { useModularCssTransformer } from '@waweb/tools.functions.modular-css-webpack-config';
import { NxReactAspect } from './nx-react.aspect';

const { previewConfigTransformer, devServerConfigTransformer } =
  useModularCssTransformer({
    json: 'css-module.json',
    namedExports: true,
  });

export class NxReactMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const templatesReactEnv = envs.compose(react.reactEnv, [
      react.useWebpack({
        previewConfig: [previewConfigTransformer],
        devServerConfig: [devServerConfigTransformer],
      }),

      /**
       * override dependencies here
       * @example
       * Uncomment types to include version 17.0.3 of the types package
       */
      react.overrideDependencies({
        devDependencies: {
          '@modular-css/webpack': '^27.0.3',
        },
      }),
    ]);
    envs.registerEnv(templatesReactEnv);
    return new NxReactMain();
  }
}

NxReactAspect.addRuntime(NxReactMain);
