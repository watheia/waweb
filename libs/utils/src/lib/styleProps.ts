/*
 * Watheia Labs, LLC. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {
  BackgroundColorValue,
  BorderColorValue,
  BorderRadiusValue,
  BorderSizeValue,
  ColorValue,
  DimensionValue,
  Direction,
  Responsive,
  ResponsiveProp,
  StyleProps,
  ViewStyleProps
} from "@watheia/types"
import { CSSProperties, HTMLAttributes } from "react"
import { useBreakpoint } from "./BreakpointProvider"
import { useLocale } from "@react-aria/i18n"

type Breakpoint = "base" | "S" | "M" | "L" | string
type StyleName = string | string[] | ((dir: Direction) => string)
type StyleHandler = (value: any) => string
export interface StyleHandlers {
  [key: string]: [StyleName, StyleHandler]
}

export const baseStyleProps: StyleHandlers = {
  margin: ["margin", dimensionValue],
  marginStart: [rtl("marginLeft", "marginRight"), dimensionValue],
  marginEnd: [rtl("marginRight", "marginLeft"), dimensionValue],
  // marginLeft: ['marginLeft', dimensionValue],
  // marginRight: ['marginRight', dimensionValue],
  marginTop: ["marginTop", dimensionValue],
  marginBottom: ["marginBottom", dimensionValue],
  marginX: [["marginLeft", "marginRight"], dimensionValue],
  marginY: [["marginTop", "marginBottom"], dimensionValue],
  width: ["width", dimensionValue],
  height: ["height", dimensionValue],
  minWidth: ["minWidth", dimensionValue],
  minHeight: ["minHeight", dimensionValue],
  maxWidth: ["maxWidth", dimensionValue],
  maxHeight: ["maxHeight", dimensionValue],
  isHidden: ["display", hiddenValue],
  alignSelf: ["alignSelf", passthroughStyle],
  justifySelf: ["justifySelf", passthroughStyle],
  position: ["position", anyValue],
  zIndex: ["zIndex", anyValue],
  top: ["top", dimensionValue],
  bottom: ["bottom", dimensionValue],
  start: [rtl("left", "right"), dimensionValue],
  end: [rtl("right", "left"), dimensionValue],
  left: ["left", dimensionValue],
  right: ["right", dimensionValue],
  order: ["order", anyValue],
  flex: ["flex", flexValue],
  flexGrow: ["flexGrow", passthroughStyle],
  flexShrink: ["flexShrink", passthroughStyle],
  flexBasis: ["flexBasis", passthroughStyle],
  gridArea: ["gridArea", passthroughStyle],
  gridColumn: ["gridColumn", passthroughStyle],
  gridColumnEnd: ["gridColumnEnd", passthroughStyle],
  gridColumnStart: ["gridColumnStart", passthroughStyle],
  gridRow: ["gridRow", passthroughStyle],
  gridRowEnd: ["gridRowEnd", passthroughStyle],
  gridRowStart: ["gridRowStart", passthroughStyle]
}

export const viewStyleProps: StyleHandlers = {
  ...baseStyleProps,
  backgroundColor: ["backgroundColor", backgroundColorValue],
  borderWidth: ["borderWidth", borderSizeValue],
  borderStartWidth: [rtl("borderLeftWidth", "borderRightWidth"), borderSizeValue],
  borderEndWidth: [rtl("borderRightWidth", "borderLeftWidth"), borderSizeValue],
  borderLeftWidth: ["borderLeftWidth", borderSizeValue],
  borderRightWidth: ["borderRightWidth", borderSizeValue],
  borderTopWidth: ["borderTopWidth", borderSizeValue],
  borderBottomWidth: ["borderBottomWidth", borderSizeValue],
  borderXWidth: [["borderLeftWidth", "borderRightWidth"], borderSizeValue],
  borderYWidth: [["borderTopWidth", "borderBottomWidth"], borderSizeValue],
  borderColor: ["borderColor", borderColorValue],
  borderStartColor: [rtl("borderLeftColor", "borderRightColor"), borderColorValue],
  borderEndColor: [rtl("borderRightColor", "borderLeftColor"), borderColorValue],
  borderLeftColor: ["borderLeftColor", borderColorValue],
  borderRightColor: ["borderRightColor", borderColorValue],
  borderTopColor: ["borderTopColor", borderColorValue],
  borderBottomColor: ["borderBottomColor", borderColorValue],
  borderXColor: [["borderLeftColor", "borderRightColor"], borderColorValue],
  borderYColor: [["borderTopColor", "borderBottomColor"], borderColorValue],
  borderRadius: ["borderRadius", borderRadiusValue],
  borderTopStartRadius: [
    rtl("borderTopLeftRadius", "borderTopRightRadius"),
    borderRadiusValue
  ],
  borderTopEndRadius: [
    rtl("borderTopRightRadius", "borderTopLeftRadius"),
    borderRadiusValue
  ],
  borderBottomStartRadius: [
    rtl("borderBottomLeftRadius", "borderBottomRightRadius"),
    borderRadiusValue
  ],
  borderBottomEndRadius: [
    rtl("borderBottomRightRadius", "borderBottomLeftRadius"),
    borderRadiusValue
  ],
  borderTopLeftRadius: ["borderTopLeftRadius", borderRadiusValue],
  borderTopRightRadius: ["borderTopRightRadius", borderRadiusValue],
  borderBottomLeftRadius: ["borderBottomLeftRadius", borderRadiusValue],
  borderBottomRightRadius: ["borderBottomRightRadius", borderRadiusValue],
  padding: ["padding", dimensionValue],
  paddingStart: [rtl("paddingLeft", "paddingRight"), dimensionValue],
  paddingEnd: [rtl("paddingRight", "paddingLeft"), dimensionValue],
  paddingLeft: ["paddingLeft", dimensionValue],
  paddingRight: ["paddingRight", dimensionValue],
  paddingTop: ["paddingTop", dimensionValue],
  paddingBottom: ["paddingBottom", dimensionValue],
  paddingX: [["paddingLeft", "paddingRight"], dimensionValue],
  paddingY: [["paddingTop", "paddingBottom"], dimensionValue],
  overflow: ["overflow", passthroughStyle]
}

const borderStyleProps = {
  borderWidth: "borderStyle",
  borderLeftWidth: "borderLeftStyle",
  borderRightWidth: "borderRightStyle",
  borderTopWidth: "borderTopStyle",
  borderBottomWidth: "borderBottomStyle"
}

function rtl(ltr: string, rtl: string) {
  return (direction: Direction) => (direction === "rtl" ? rtl : ltr)
}

const UNIT_RE = /(%|px|em|rem|vw|vh|auto|cm|mm|in|pt|pc|ex|ch|rem|vmin|vmax|fr)$/
const FUNC_RE = /^\s*\w+\(/
const SPECTRUM_VARIABLE_RE = /(static-)?size-\d+|single-line-(height|width)/g

export function dimensionValue(value: DimensionValue) {
  if (typeof value === "number") {
    return value + "px"
  }

  if (UNIT_RE.test(value)) {
    return value
  }

  if (FUNC_RE.test(value)) {
    return value.replace(
      SPECTRUM_VARIABLE_RE,
      "var(--wa-global-dimension-$&, var(--wa-alias-$&))"
    )
  }

  return `var(--wa-global-dimension-${value}, var(--wa-alias-${value}))`
}

export function responsiveDimensionValue(
  value: Responsive<DimensionValue>,
  matchedBreakpoints: Breakpoint[]
) {
  value = getResponsiveProp(value, matchedBreakpoints)
  return dimensionValue(value)
}

type ColorType = "default" | "background" | "border" | "icon" | "status"
function colorValue(value: ColorValue, type: ColorType = "default") {
  return `var(--wa-global-color-${value}, var(--wa-semantic-${value}-color-${type}))`
}

function backgroundColorValue(value: BackgroundColorValue) {
  return `var(--wa-alias-background-color-${value}, ${colorValue(
    value as ColorValue,
    "background"
  )})`
}

function borderColorValue(value: BorderColorValue) {
  if (value === "default") {
    return "var(--wa-alias-border-color)"
  }

  return `var(--wa-alias-border-color-${value}, ${colorValue(
    value as ColorValue,
    "border"
  )})`
}

function borderSizeValue(value: BorderSizeValue) {
  return `var(--wa-alias-border-size-${value})`
}

function borderRadiusValue(value: BorderRadiusValue) {
  return `var(--wa-alias-border-radius-${value})`
}

function hiddenValue(value: boolean) {
  return value ? "none" : undefined
}

function anyValue(value: any) {
  return value
}

function flexValue(value: boolean | number | string) {
  if (typeof value === "boolean") {
    return value ? "1" : undefined
  }

  return "" + value
}

export function convertStyleProps(
  props: ViewStyleProps,
  handlers: StyleHandlers,
  direction: Direction,
  matchedBreakpoints: Breakpoint[]
) {
  const style: CSSProperties = {}
  for (const key in props) {
    const styleProp = handlers[key]
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    if (!styleProp || props[key] == null) {
      continue
    }

    // eslint-disable-next-line prefer-const
    let [name, convert] = styleProp
    if (typeof name === "function") {
      name = name(direction)
    }

    const prop = getResponsiveProp(props[key], matchedBreakpoints)
    const value = convert(prop)
    if (Array.isArray(name)) {
      for (const k of name) {
        style[k] = value
      }
    } else {
      style[name] = value
    }
  }

  for (const prop in borderStyleProps) {
    if (style[prop]) {
      style[borderStyleProps[prop]] = "solid"
      style.boxSizing = "border-box"
    }
  }

  return style
}

type StylePropsOptions = {
  matchedBreakpoints?: Breakpoint[]
}

export function useStyleProps<T extends StyleProps>(
  props: T,
  handlers: StyleHandlers = baseStyleProps,
  options: StylePropsOptions = {}
) {
  const { UNSAFE_className, UNSAFE_style, ...otherProps } = props
  const breakpointProvider = useBreakpoint()
  const { direction } = useLocale()
  const { matchedBreakpoints = breakpointProvider?.matchedBreakpoints || ["base"] } =
    options
  const styles = convertStyleProps(props, handlers, direction, matchedBreakpoints)
  const style = { ...UNSAFE_style, ...styles }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (otherProps.className) {
    console.warn(
      "The className prop is unsafe and is unsupported in React Wa v3. " +
        "Please use style props with Wa variables, or UNSAFE_className if you absolutely must do something custom. " +
        "Note that this may break in future versions due to DOM structure changes."
    )
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (otherProps.style) {
    console.warn(
      "The style prop is unsafe and is unsupported in React Wa v3. " +
        "Please use style props with Wa variables, or UNSAFE_style if you absolutely must do something custom. " +
        "Note that this may break in future versions due to DOM structure changes."
    )
  }

  const styleProps: HTMLAttributes<HTMLElement> = {
    style,
    className: UNSAFE_className
  }

  if (getResponsiveProp(props.isHidden, matchedBreakpoints)) {
    styleProps.hidden = true
  }

  return {
    styleProps
  }
}

export function passthroughStyle(value) {
  return value
}

export function getResponsiveProp<T>(
  prop: Responsive<T>,
  matchedBreakpoints: Breakpoint[]
): T {
  if (prop && typeof prop === "object" && !Array.isArray(prop)) {
    for (let i = 0; i < matchedBreakpoints.length; i++) {
      const breakpoint = matchedBreakpoints[i]
      if (prop[breakpoint] != null) {
        return prop[breakpoint]
      }
    }
    return (prop as ResponsiveProp<T>).base
  }
  return prop as T
}
