import React from "react"
import { isBrowser } from "@watheia/utils"

const useSessionStorage = (key: string, initialValue: any) => {
  const [storedValue, setStoredValue] = React.useState(() => {
    if (isBrowser) {
      const item = window.sessionStorage.getItem(key)
      return !!item ? JSON.parse(item) : initialValue
    } else {
      return initialValue
    }
  })

  const setValue = (value: (arg0: any) => any) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value
    setStoredValue(valueToStore)
    if (isBrowser) {
      window.sessionStorage.setItem(key, JSON.stringify(valueToStore))
    }
  }

  return [storedValue, setValue]
}

export default useSessionStorage
