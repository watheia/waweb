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

import { ButtonProps } from "./@types"
import {
  classNames,
  SlotProvider,
  useFocusableRef,
  useSlotProps,
  useStyleProps
} from "@watheia/utils"
import { DOMProps, FocusableRef, StyleProps } from "@watheia/types"
import { FocusRing } from "@react-aria/focus"
import { mergeProps } from "@react-aria/utils"
import React, { RefObject } from "react"
import styles from "./styles/vars.module.css"
import { useButton } from "@react-aria/button"
import { useHover } from "@react-aria/interactions"

interface FieldButtonProps extends ButtonProps, DOMProps, StyleProps {
  isQuiet?: boolean
  isActive?: boolean
  autoFocus?: boolean
  validationState?: "valid" | "invalid"
  focusRingClass?: string
}

// @private
function FieldButton(props: FieldButtonProps, ref: FocusableRef<HTMLButtonElement>) {
  props = useSlotProps(props, "button")
  const {
    isQuiet,
    isDisabled,
    validationState,
    children,
    autoFocus,
    isActive,
    focusRingClass,
    ...otherProps
  } = props
  const domRef = useFocusableRef(ref) as RefObject<HTMLButtonElement>
  const { buttonProps, isPressed } = useButton(props, domRef)
  const { hoverProps, isHovered } = useHover({ isDisabled })
  const { styleProps } = useStyleProps(otherProps)

  return (
    <FocusRing
      focusRingClass={classNames(styles, "focus-ring", focusRingClass)}
      autoFocus={autoFocus}
    >
      <button
        {...mergeProps(buttonProps, hoverProps)}
        ref={domRef}
        className={classNames(
          styles["wa-FieldButton"],
          {
            [styles["wa-FieldButton--quiet"]]: isQuiet,
            [styles["is-active"]]: isActive || isPressed,
            [styles["is-disabled"]]: isDisabled,
            [styles["wa-FieldButton--invalid"]]: validationState === "invalid",
            [styles["is-hovered"]]: isHovered
          },
          styleProps.className
        )}
      >
        <SlotProvider
          slots={{
            icon: {
              size: "S",
              UNSAFE_className: classNames(styles, "wa-Icon")
            }
          }}
        >
          {children}
        </SlotProvider>
      </button>
    </FocusRing>
  )
}

const _FieldButton = React.forwardRef(FieldButton)
export { _FieldButton as FieldButton }
