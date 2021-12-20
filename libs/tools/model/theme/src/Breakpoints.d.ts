export interface Breakpoints {
  S?: number;
  M?: number;
  L?: number;
  // Currently, it only deals with pixels, but we need to fix it to accept em or rem as well.
  [custom: string]: number | undefined;
}
