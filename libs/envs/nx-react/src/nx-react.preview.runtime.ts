import { ThemeCompositions } from '@teambit/documenter.theme.theme-compositions';
import { PreviewRuntime } from '@teambit/preview';
import { ReactAspect, ReactPreview } from '@teambit/react';
import { Theme } from '@teambit/react.templates.themes.theme';
import { NxReactAspect } from './nx-react.aspect';

export class NxReactPreviewMain {
  static runtime = PreviewRuntime;

  static dependencies = [ReactAspect];

  static async provider([react]: [ReactPreview]) {
    const previewMain = new NxReactPreviewMain();
    // register a new provider to wrap all compositions using this environment with a custom theme.
    react.registerProvider([ThemeCompositions, Theme]);

    return previewMain;
  }
}

NxReactAspect.addRuntime(NxReactPreviewMain);
