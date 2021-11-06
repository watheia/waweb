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

import { useButton } from "@react-aria/button"
import { FocusRing } from "@react-aria/focus"
import { useHover } from "@react-aria/interactions"
import { mergeProps } from "@react-aria/utils"
import { useProviderProps } from "@watheia/context"
import { WaButtonProps } from "./@types"
import { Text } from "@waweb/atoms.text"
import { FocusableRef } from "@watheia/types"
import {
  classNames,
  SlotProvider,
  useFocusableRef,
  useSlotProps,
  useStyleProps
} from "@watheia/utils"
import React, { ElementType, ReactElement } from "react"
import styles from "./styles/vars.module.css"

// todo: CSS hasn't caught up yet, map
const VARIANT_MAPPING = {
  negative: "warning"
}

function Button<T extends ElementType = "button">(
  props: WaButtonProps<T>,
  ref: FocusableRef<HTMLButtonElement>
) {
  props = useProviderProps(props)
  props = useSlotProps(props, "button")
  const {
    elementType: ElementType = "button",
    children,
    variant,
    isQuiet,
    isDisabled,
    autoFocus,
    ...otherProps
  } = props
  const domRef = useFocusableRef<HTMLButtonElement>(ref)
  const { buttonProps, isPressed } = useButton(props, domRef)
  const { hoverProps, isHovered } = useHover({ isDisabled })
  const { styleProps } = useStyleProps(otherProps)

  let buttonVariant = variant
  if (VARIANT_MAPPING[variant]) {
    buttonVariant = VARIANT_MAPPING[variant]
  }

  return (
    <FocusRing focusRingClass={classNames(styles, "focus-ring")} autoFocus={autoFocus}>
      <ElementType
        {...styleProps}
        {...mergeProps(buttonProps, hoverProps)}
        ref={domRef}
        className={classNames(
          styles,
          "wa-Button",
          `wa-Button--${buttonVariant}`,
          {
            "wa-Button--quiet": isQuiet,
            "is-disabled": isDisabled,
            "is-active": isPressed,
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
              UNSAFE_className: classNames(styles, "wa-Button-label")
            }
          }}
        >
          {typeof children === "string" ? <Text>{children}</Text> : children}
        </SlotProvider>
      </ElementType>
    </FocusRing>
  )
}

/**
 * Buttons allow users to perform an action or to navigate to another page.
 * They have multiple styles for various needs, and are ideal for calling attention to
 * where a user needs to do something in order to move forward in a flow.
 */
const _Button = React.forwardRef(Button) as <T extends ElementType = "button">(
  props: WaButtonProps<T> & { ref?: FocusableRef<HTMLElement> }
) => ReactElement
export { _Button as Button }
