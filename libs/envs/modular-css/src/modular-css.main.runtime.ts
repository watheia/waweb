import { MainRuntime } from '@teambit/cli';
import EnvsAspect, { Environment, EnvsMain } from '@teambit/envs';
import ReactAspect, { ReactMain } from '@teambit/react';
import { useModularCss } from '@waweb/tools.use-modular-css';
import { ModularCssEnvAspect } from './modular-css.aspect';

const { devServerTransform, previewTransform } = useModularCss({});

type EnvDeps = [EnvsMain, ReactMain];

export class ModularCssEnvMain {
  constructor(
    readonly react: ReactMain,
    readonly envs: EnvsMain,
    readonly mcssEnv: Environment
  ) {}

  static slots = [];
  static dependencies = [EnvsAspect, ReactAspect];
  static runtime = MainRuntime;

  static async provider([envs, react]: EnvDeps) {
    const modularCssEnv = react.compose([
      react.useWebpack({
        previewConfig: [previewTransform],
        devServerConfig: [devServerTransform],
      }),
    ]);

    envs.registerEnv(modularCssEnv);
    return new ModularCssEnvMain(react, envs, modularCssEnv);
  }
}

ModularCssEnvAspect.addRuntime(ModularCssEnvMain);
