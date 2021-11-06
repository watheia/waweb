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

import { DOMRef } from "@watheia/types"
import { filterDOMProps } from "@watheia/utils"
import { HeadingProps } from "./@types"
import React, { ElementType, forwardRef } from "react"
import { useDOMRef, useSlotProps, useStyleProps } from "@watheia/utils"

function Heading(props: HeadingProps, ref: DOMRef<HTMLHeadingElement>) {
  props = useSlotProps(props, "heading")

  const { children, level = 3, ...otherProps } = props
  const { styleProps } = useStyleProps(otherProps)
  const domRef = useDOMRef(ref)
  const HeadingTag = `h${level}` as ElementType

  return (
    <HeadingTag {...filterDOMProps(otherProps)} {...styleProps} ref={domRef}>
      {children}
    </HeadingTag>
  )
}

/**
 * Heading is used to create various levels of typographic hierarchies.
 */
const _Heading = forwardRef(Heading)
export { _Heading as Heading }
