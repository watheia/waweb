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

import { mergeProps } from "@react-aria/utils"
import React, { useContext, useMemo } from "react"
import { CSSModule } from "@watheia/types"

interface SlotProps {
  slot?: string
}

let SlotContext = React.createContext(null)

export function useSlotProps<T>(props: T & { id?: string }, defaultSlot?: string): T {
  let slot = (props as SlotProps).slot || defaultSlot
  let { [slot ?? ""]: slotProps = {} }: Record<string, any> = useContext(SlotContext) || {}

  return mergeProps(props, mergeProps(slotProps, { id: props.id }))
}

export function cssModuleToSlots(cssModule: CSSModule) {
  return Object.keys(cssModule).reduce((acc, slot) => {
    acc[slot] = { UNSAFE_className: cssModule[slot] }
    return acc
  }, {} as Record<string, any>)
}

export type SlotProviderProps = { slots?: Record<string, any> | undefined; children: any }

export function SlotProvider(props: SlotProviderProps) {
  let parentSlots: Record<string, any> = useContext(SlotContext) || {}
  let { slots = {}, children } = props

  // Merge props for each slot from parent context and props
  let value: Record<string, any> = useMemo(
    () =>
      Object.keys(parentSlots)
        .concat(Object.keys(slots))
        .reduce(
          (o, p) => ({
            ...o,
            [p]: mergeProps(parentSlots[p] || {}, slots[p] || {})
          }),
          {}
        ),
    [parentSlots, slots]
  )

  // @ts-ignore
  return <SlotContext.Provider value={value}>{children}</SlotContext.Provider>
}

export function ClearSlots(props: { [x: string]: any; children: any }) {
  let { children, ...otherProps } = props
  let content = children
  if (React.Children.toArray(children).length <= 1) {
    if (typeof children === "function") {
      // need to know if the node is a string or something else that react can render that doesn't get props
      content = React.cloneElement(React.Children.only(children), otherProps)
    }
  }

  // @ts-ignore
  return <SlotContext.Provider value={{}}>{content}</SlotContext.Provider>
}
