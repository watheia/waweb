import { Theme, ColorScheme } from "../model"
import { useMediaQuery } from "@react-spectrum/utils"

export default function useColorScheme(
  theme: Theme,
  defaultColorScheme: ColorScheme
): ColorScheme {
  let matchesDark = useMediaQuery("(prefers-color-scheme: dark)")
  let matchesLight = useMediaQuery("(prefers-color-scheme: light)")

  // importance OS > default > omitted

  if (theme.dark && matchesDark) {
    return "dark"
  }

  if (theme.light && matchesLight) {
    return "light"
  }

  if (theme.dark && defaultColorScheme === "dark") {
    return "dark"
  }

  if (theme.light && defaultColorScheme === "light") {
    return "light"
  }

  if (!theme.dark) {
    return "light"
  }

  if (!theme.light) {
    return "dark"
  }

  return "light"
}
