/*
 * Copyright 2021 Watheia Labs, LLC. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { DOMProps, StyleProps, ValidationState } from "@react-types/shared"
import { ReactNode } from "react"
import { ThemeProvider } from "@mui/material/styles"

import {
  BreakpointProvider,
  useDOMRef,
  useMatchedBreakpoints,
  useStyleProps
} from "@react-spectrum/utils"
import { SessionProvider } from "../lib/auth"
import clsx from "clsx"
import { DOMRef } from "@react-types/shared"
import { filterDOMProps } from "@react-aria/utils"
import { I18nProvider, useLocale } from "@react-aria/i18n"
import { ModalProvider, useModalProvider } from "@react-aria/overlays"
import React, { useContext, useEffect, useRef } from "react"
import {
  DEFAULT_BREAKPOINTS,
  Breakpoints,
  Theme,
  ColorScheme,
  Scale,
  useColorScheme,
  useScale,
  createMuiTheme
} from "@watheia/app.theme"

import pkg from "package.json"

import styles from "apps/web/src/styles/components/typography/index.module.css"

const Context = React.createContext<ProviderContext | null>(null)
Context.displayName = "ProviderContext"

interface ContextProps {
  /** Whether descendants should be displayed with the quiet style. */
  isQuiet?: boolean
  /** Whether descendants should be displayed with the emphasized style. */
  isEmphasized?: boolean
  /** Whether descendants should be disabled. */
  isDisabled?: boolean
  /** Whether descendants should be displayed with the required style. */
  isRequired?: boolean
  /** Whether descendants should be read only. */
  isReadOnly?: boolean
  /** Whether descendants should be displayed with the validation state style. */
  validationState?: ValidationState
}

export interface ProviderProps extends ContextProps, DOMProps, StyleProps {
  /** The content of the Provider. */
  children: ReactNode
  /**
   * The theme for your application.
   */
  theme: Theme
  /**
   * The color scheme for your application.
   * Defaults to operating system preferences.
   */
  colorScheme?: ColorScheme
  /**
   * The default color scheme if no operating system setting is available.
   * @default 'light'
   */
  defaultColorScheme?: ColorScheme
  /**
   * Sets the scale for your applications. Defaults based on device pointer type.
   */
  scale?: Scale
  /**
   * The locale for your application as a [BCP 47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code.
   * Defaults to the browser/OS language setting.
   * @default 'en-US'
   */
  locale?: string
  /**
   * The breakpoints for styleProps.
   * Do not use `base` property.
   * @default {S:380,M:768,L:1024}
   */
  breakpoints?: Breakpoints
}

export interface ProviderContext extends ContextProps {
  version: string
  theme: Theme
  colorScheme: ColorScheme
  scale: Scale
  breakpoints: Breakpoints
}

function Provider(props: ProviderProps, ref: DOMRef<HTMLDivElement>) {
  // console.log("Provider(props)", props)
  const prevContext = useProvider()
  const prevColorScheme = prevContext && prevContext.colorScheme
  const prevBreakpoints = prevContext && prevContext.breakpoints
  const { theme = prevContext && prevContext.theme, defaultColorScheme } = props
  // Hooks must always be called.
  const autoColorScheme = useColorScheme(theme, defaultColorScheme)
  const autoScale = useScale(theme)
  const { locale: prevLocale } = useLocale()
  // if the new theme doesn't support the prevColorScheme, we must resort to the auto
  const usePrevColorScheme = !!theme[prevColorScheme]
  const version = pkg.version

  // importance of color scheme props > parent > auto:(OS > default > omitted)
  const {
    colorScheme = usePrevColorScheme ? prevColorScheme : autoColorScheme,
    scale = prevContext ? prevContext.scale : autoScale,
    locale = prevContext ? prevLocale : null,
    breakpoints = prevContext ? prevBreakpoints : DEFAULT_BREAKPOINTS,
    children,
    isQuiet,
    isEmphasized,
    isDisabled,
    isRequired,
    isReadOnly,
    validationState,
    ...otherProps
  } = props

  // select only the props with values so undefined props don't overwrite prevContext values
  const currentProps = {
    version,
    theme,
    breakpoints,
    colorScheme,
    scale,
    isQuiet,
    isEmphasized,
    isDisabled,
    isRequired,
    isReadOnly,
    validationState
  }

  const matchedBreakpoints = useMatchedBreakpoints(breakpoints)
  const filteredProps = {}
  Object.entries(currentProps).forEach(
    ([key, value]) => value !== undefined && (filteredProps[key] = value)
  )

  // Merge options with parent provider
  const context = Object.assign({}, prevContext, filteredProps)

  // Only wrap in a DOM node if the theme, colorScheme, or scale changed
  let contents = children
  const domProps = filterDOMProps(otherProps)
  const { styleProps } = useStyleProps(otherProps, undefined, { matchedBreakpoints })
  if (
    !prevContext ||
    props.locale ||
    theme !== prevContext.theme ||
    colorScheme !== prevContext.colorScheme ||
    scale !== prevContext.scale ||
    Object.keys(domProps).length > 0 ||
    otherProps.UNSAFE_className ||
    Object.keys(styleProps.style).length > 0
  ) {
    contents = (
      <ProviderWrapper
        {...props}
        UNSAFE_style={{
          isolation: !prevContext ? "isolate" : undefined,
          ...styleProps.style
        }}
        ref={ref}
      >
        {contents}
      </ProviderWrapper>
    )
  }

  return (
    <Context.Provider value={context}>
      <I18nProvider locale={locale}>
        <BreakpointProvider matchedBreakpoints={matchedBreakpoints}>
          <ModalProvider>
            <SessionProvider>
              <ThemeProvider
                theme={createMuiTheme(
                  colorScheme === "" ? defaultColorScheme : colorScheme
                )}
              >
                {contents}
              </ThemeProvider>
            </SessionProvider>
          </ModalProvider>
        </BreakpointProvider>
      </I18nProvider>
    </Context.Provider>
  )
}

/**
 * Provider is the container for all React Spectrum applications.
 * It defines the theme, locale, and other application level settings,
 * and can also be used to provide common properties to a group of components.
 */
let _Provider = React.forwardRef(Provider)
export { _Provider as Provider }

const ProviderWrapper = React.forwardRef(function ProviderWrapper(
  props: ProviderProps,
  ref: DOMRef<HTMLDivElement>
) {
  const { children, ...otherProps } = props
  const { locale, direction } = useLocale()
  const { theme, colorScheme, scale } = useProvider()
  const { modalProviderProps } = useModalProvider()
  const { styleProps } = useStyleProps(otherProps)
  const domRef = useDOMRef(ref)

  const themeKey = Object.keys(theme[colorScheme])[0]
  const scaleKey = Object.keys(theme[scale])[0]

  const className = clsx(
    styleProps.className,
    styles.wa,
    theme[colorScheme][themeKey],
    theme[scale][scaleKey],
    theme.global ? Object.values(theme.global) : null
  )

  const style = {
    ...styleProps.style,
    // This ensures that browser native UI like scrollbars are rendered in the right color scheme.
    // See https://web.dev/color-scheme/.
    colorScheme:
      props.colorScheme ??
      colorScheme ??
      Object.keys(theme)
        .filter((k) => k === "light" || k === "dark")
        .join(" ")
  }

  const hasWarned = useRef(false)
  useEffect(() => {
    if (direction && domRef.current) {
      const closestDir = domRef.current.parentElement.closest("[dir]")
      const dir = closestDir && closestDir.getAttribute("dir")
      if (dir && dir !== direction && !hasWarned.current) {
        console.warn(`Language directions cannot be nested. ${direction} inside ${dir}.`)
        hasWarned.current = true
      }
    }
  }, [direction, domRef, hasWarned])

  return (
    <div
      {...filterDOMProps(otherProps)}
      {...styleProps}
      {...modalProviderProps}
      className={className}
      style={style}
      lang={locale}
      dir={direction}
      ref={domRef}
    >
      {children}
    </div>
  )
})

export function useProvider(): ProviderContext {
  return useContext(Context)
}

export function useProviderProps<T>(props: T): T {
  const context = useProvider()
  if (!context) {
    return props
  }
  return Object.assign(
    {},
    {
      isQuiet: context.isQuiet,
      isEmphasized: context.isEmphasized,
      isDisabled: context.isDisabled,
      isRequired: context.isRequired,
      isReadOnly: context.isReadOnly,
      validationState: context.validationState
    },
    props
  )
}
