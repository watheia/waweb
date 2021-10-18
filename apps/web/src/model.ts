export type Nullable = undefined | null
export type Primitive = string | number | bigint | boolean | Nullable
export type JSON = { [key: string]: JSON | JSON[] | Primitive | Primitive[] }

export type CSSModule = {
  [className: string]: string
}

export type ColorScheme = "light" | "dark"

export type Scale = "medium" | "large"

export interface Breakpoints {
  S?: number
  M?: number
  L?: number
  // Currently, it only deals with pixels, but we need to fix it to accept em or rem as well.
  [custom: string]: number | undefined
}

/**
 * A theme object defines CSS variables for a theme, across multiple color schemes and scales.
 **/
export interface Theme {
  /** CSS module defining the global variables, which do not change between color schemes/scales. */
  global?: CSSModule
  /** CSS module defining the variables for the light color scheme. */
  light?: CSSModule
  /** CSS module defining the variables for the dark color scheme. */
  dark?: CSSModule
  /** CSS module defining the variables for the medium scale. */
  medium?: CSSModule
  /** CSS module defining the variables for the large scale. */
  large?: CSSModule
}
