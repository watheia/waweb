/**
 * A theme object defines CSS variables for a theme, across multiple
 * color schemes and scales.
 **/
export interface Theme {
  /** CSS module defining the global variables, which do not change between color schemes/scales. */
  global?: CSSModule;
  /** CSS module defining the variables for the light color scheme. */
  light?: CSSModule;
  /** CSS module defining the variables for the dark color scheme. */
  dark?: CSSModule;
  /** CSS module defining the variables for the medium scale. */
  medium?: CSSModule;
  /** CSS module defining the variables for the large scale. */
  large?: CSSModule;
}
