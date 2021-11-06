import { Theme, Scale } from "./types"
import { useMediaQuery } from "@watheia/utils"

export default function useScale(theme: Theme): Scale {
  let matchesFine = useMediaQuery("(any-pointer: fine)")
  if (matchesFine && theme.medium) {
    return "medium"
  }

  if (theme.large) {
    return "large"
  }

  return "medium"
}
