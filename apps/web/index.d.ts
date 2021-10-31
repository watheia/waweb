/* eslint-disable @typescript-eslint/no-explicit-any */
declare module "*.svg" {
  const content: any
  export const ReactComponent: any
  export default content
}

declare module "*.module.css" {
  const content: any
  export const CSSModule: any
  export default content
}
