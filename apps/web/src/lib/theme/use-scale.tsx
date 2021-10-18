import { Theme, Scale } from "../model"
import { useMediaQuery } from "@react-spectrum/utils"

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
