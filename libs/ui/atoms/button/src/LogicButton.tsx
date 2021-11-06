/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { classNames, useFocusableRef, useStyleProps } from "@watheia/utils"
import { FocusableRef } from "@watheia/types"
import { FocusRing } from "@react-aria/focus"
import { mergeProps } from "@react-aria/utils"
import React from "react"
import { WaLogicButtonProps } from "@watheia/app.ui.atoms.button"
import styles from "./styles/vars.module.css"
import { useButton } from "@react-aria/button"
import { useHover } from "@react-aria/interactions"
import { useProviderProps } from "@watheia/app.context"

function LogicButton(props: WaLogicButtonProps, ref: FocusableRef<HTMLButtonElement>) {
  props = useProviderProps(props)
  let { variant, children, isDisabled, autoFocus, ...otherProps } = props
  let domRef = useFocusableRef<HTMLButtonElement>(ref)
  let { buttonProps, isPressed } = useButton(props, domRef)
  let { hoverProps, isHovered } = useHover({ isDisabled })
  let { styleProps } = useStyleProps(otherProps)

  return (
    <FocusRing focusRingClass={classNames(styles, "focus-ring")} autoFocus={autoFocus}>
      <button
        {...styleProps}
        {...mergeProps(buttonProps, hoverProps)}
        ref={domRef}
        className={classNames(
          styles,
          "spectrum-LogicButton",
          {
            [`spectrum-LogicButton--${variant}`]: variant,
            "is-disabled": isDisabled,
            "is-active": isPressed,
            "is-hovered": isHovered
          },
          styleProps.className
        )}
      >
        <span className={classNames(styles, "spectrum-Button-label")}>{children}</span>
      </button>
    </FocusRing>
  )
}

/**
 * A LogicButton displays an operator within a boolean logic sequence.
 */
let _LogicButton = React.forwardRef(LogicButton)
export { _LogicButton as LogicButton }
