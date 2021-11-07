/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useContext, useEffect, useRef } from "react"
import Head from "next/head"
import { DefaultSeo } from "next-seo"
import seo from "./default-seo"
import {
  BreakpointProvider,
  useDOMRef,
  useMatchedBreakpoints,
  useStyleProps
} from "@watheia/utils"
import clsx from "clsx"
import { DOMRef } from "@watheia/types"
import { filterDOMProps } from "@watheia/utils"
import { I18nProvider, useLocale } from "@react-aria/i18n"
import { ModalProvider, useModalProvider } from "@react-aria/overlays"
import { ProviderContext as PageContext, ProviderProps } from "@watheia/types"
import { styles } from "@waweb/atoms.text"
import { useColorScheme, useScale } from "@watheia/theme"
import { PageLayout } from "@waweb/molecules.layout"
const version = "0.1.0"

const Context = React.createContext<PageContext | null>(null)
Context.displayName = "ProviderContext"

const DEFAULT_BREAKPOINTS = { S: 640, M: 768, L: 1024, XL: 1280, XXL: 1536 }

export function Page(props: ProviderProps, ref: DOMRef<HTMLDivElement>) {
  const prevContext = usePage()
  const prevColorScheme = prevContext && prevContext.colorScheme
  const prevBreakpoints = prevContext && prevContext.breakpoints
  const { theme = prevContext && prevContext.theme, defaultColorScheme = "light" } = props
  // Hooks must always be called.
  const autoColorScheme = useColorScheme(theme, defaultColorScheme)
  const autoScale = useScale(theme)
  const { locale: prevLocale } = useLocale()
  // if the new theme doesn't support the prevColorScheme, we must resort to the auto
  const usePrevColorScheme = !!theme[prevColorScheme]

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
  const filteredProps: Record<string, any> = {}
  Object.entries(currentProps).forEach(
    ([key, value]) => value !== undefined && (filteredProps[key] = value)
  )

  // Merge options with parent provider
  const context = Object.assign({}, prevContext, filteredProps)

  // Only wrap in a DOM node if the theme, colorScheme, or scale changed
  let contents = children
  const domProps = filterDOMProps(otherProps)
  const { styleProps } = useStyleProps<Record<string, any>>(otherProps, undefined, {
    matchedBreakpoints
  })
  if (
    !prevContext ||
    props.locale ||
    theme !== prevContext.theme ||
    colorScheme !== prevContext.colorScheme ||
    scale !== prevContext.scale ||
    Object.keys(domProps).length > 0 ||
    otherProps.UNSAFE_className ||
    Object.keys(styleProps.style ?? {}).length > 0
  ) {
    contents = (
      <PageWrapper
        {...props}
        UNSAFE_style={{
          isolation: !prevContext ? "isolate" : undefined,
          ...styleProps.style
        }}
        ref={ref}
      >
        {contents}
      </PageWrapper>
    )
  }

  return (
    <>
      <Head>
        <DefaultSeo {...seo} />
      </Head>
      <Context.Provider value={context}>
        <I18nProvider locale={locale ?? "en"}>
          <BreakpointProvider matchedBreakpoints={matchedBreakpoints}>
            <ModalProvider>
              <PageLayout>{contents}</PageLayout>
            </ModalProvider>
          </BreakpointProvider>
        </I18nProvider>
      </Context.Provider>
    </>
  )
}

/**
 * Provider is the container for all React Spectrum applications.
 * It defines the theme, locale, and other application level settings,
 * and can also be used to provide common properties to a group of components.
 */
const _Page = React.forwardRef(Page)
export { _Page as Provider }

const PageWrapper = React.forwardRef(function ProviderWrapper(
  props: ProviderProps,
  ref: DOMRef<HTMLDivElement>
) {
  const { children, ...otherProps } = props
  const { locale, direction } = useLocale()
  const { theme, colorScheme, scale } = usePage()
  const { modalProviderProps } = useModalProvider()
  const { styleProps } = useStyleProps(otherProps)
  const domRef = useDOMRef<HTMLDivElement>(ref)

  const themeKey = Object.keys(theme[colorScheme] ?? {})[0]
  const scaleKey = Object.keys(theme[scale] ?? {})[0]

  const className = clsx(
    styleProps.className,
    // styles["spectrum"],
    styles.wa,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    theme[colorScheme][themeKey],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
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
      const closestDir = domRef?.current?.parentElement?.closest("[dir]")
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

export function usePage(): PageContext {
  return useContext(Context) as PageContext
}

export function usePageProps<T>(props: T): T {
  const context = usePage()
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

export default _Page
