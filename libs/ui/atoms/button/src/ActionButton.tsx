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

import {
  classNames,
  SlotProvider,
  useFocusableRef,
  useSlotProps,
  useStyleProps
} from "@watheia/utils"
import { FocusableRef } from "@watheia/types"
import { FocusRing } from "@react-aria/focus"
import { mergeProps } from "@react-aria/utils"
import React from "react"
import { WaActionButtonProps } from "./@types"
import styles from "./styles/vars.module.css"
import { Text } from "@watheia/app.ui.atoms.text"
import { useButton } from "@react-aria/button"
import { useHover } from "@react-aria/interactions"
import { useProviderProps } from "@watheia/app.context"

function ActionButton(props: WaActionButtonProps, ref: FocusableRef<HTMLButtonElement>) {
  props = useProviderProps(props)
  props = useSlotProps(props, "actionButton")

  const { isQuiet, isDisabled, staticColor, children, autoFocus, ...otherProps } = props
  const domRef = useFocusableRef<HTMLButtonElement>(ref)
  const { buttonProps, isPressed } = useButton(props, domRef)
  const { hoverProps, isHovered } = useHover({ isDisabled })
  const { styleProps } = useStyleProps(otherProps)
  const isTextOnly = React.Children.toArray(props.children).every(
    (c) => !React.isValidElement(c)
  )

  return (
    <FocusRing focusRingClass={classNames(styles, "focus-ring")} autoFocus={autoFocus}>
      <button
        {...styleProps}
        {...mergeProps(buttonProps, hoverProps)}
        ref={domRef}
        className={classNames(
          styles,
          "wa-ActionButton",
          {
            "wa-ActionButton--quiet": isQuiet,
            "wa-ActionButton--staticColor": !!staticColor,
            "wa-ActionButton--staticWhite": staticColor === "white",
            "wa-ActionButton--staticBlack": staticColor === "black",
            "is-active": isPressed,
            "is-disabled": isDisabled,
            "is-hovered": isHovered
          },
          styleProps.className
        )}
      >
        <SlotProvider
          slots={{
            icon: {
              size: "S",
              UNSAFE_className: classNames(styles, "wa-Icon")
            },
            text: {
              UNSAFE_className: classNames(styles, "wa-ActionButton-label")
            }
          }}
        >
          {typeof children === "string" || isTextOnly ? <Text>{children}</Text> : children}
        </SlotProvider>
      </button>
    </FocusRing>
  )
}

/**
 * ActionButtons allow users to perform an action.
 * They’re used for similar, task-based options within a workflow, and are ideal for interfaces where buttons aren’t meant to draw a lot of attention.
 */
const _ActionButton = React.forwardRef(ActionButton)
export { _ActionButton as ActionButton }