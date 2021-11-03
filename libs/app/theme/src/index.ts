export { theme as darkTheme } from "./lib/theme-dark"
export { theme as defaultTheme } from "./lib/theme-default"
export { theme as lightTheme } from "./lib/theme-light"
export { default as useColorScheme } from "./lib/use-color-scheme"
export { default as useScale } from "./lib/use-scale"
export { createMuiTheme } from "./lib/create-mui-theme"

export const DEFAULT_BREAKPOINTS = { S: 640, M: 768, L: 1024, XL: 1280, XXL: 1536 }

export type { ColorScheme, Scale, Breakpoints, CSSModule, Theme } from "./lib/types"
