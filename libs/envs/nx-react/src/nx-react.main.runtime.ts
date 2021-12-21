import { MainRuntime } from '@teambit/cli';
import { EnvsAspect, EnvsMain } from '@teambit/envs';
import { ReactAspect, ReactMain } from '@teambit/react';
import { NxReactAspect } from './nx-react.aspect';

export class NxReactMain {
  static slots = [];

  static dependencies = [ReactAspect, EnvsAspect];

  static runtime = MainRuntime;

  static async provider([react, envs]: [ReactMain, EnvsMain]) {
    const nxReactEnv = envs.compose(react.reactEnv, []);
    envs.registerEnv(nxReactEnv);
    return new NxReactMain();
  }
}

NxReactAspect.addRuntime(NxReactMain);
