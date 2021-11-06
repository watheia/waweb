import React from "react"
import styles from "./styles/vars.module"
import clsx from "clsx"
import { TextProps } from "./@types"
import { CSSModule } from "@watheia/types"
// import styles from "./styles/vars.module.css"

// const paragraphOverrides = `
//   margin-top: var(--wa-global-dimension-size-300);
// `

// const type ParagraphVariant = "Body" | "Body1" | "Body2" | "Body3" | "Body4" | "Body5"

export type ParagraphProps = TextProps & { className: any; css: CSSModule; variant }

export const Paragraph = ({
  children,
  className,
  css: cssOverrides,
  variant: Variant,
  ...props
}: ParagraphProps) => {
  return (
    <p {...props} className={clsx(className, styles["wa-Body"], styles["wa-Body--sizeM"])}>
      {children}
    </p>
  )
}
