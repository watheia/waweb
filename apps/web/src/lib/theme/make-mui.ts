import { createTheme, responsiveFontSizes } from "@mui/material"
import { light, dark } from "./palette"

export const contentWidth = 1236
const getTheme = (mode) =>
  responsiveFontSizes(
    createTheme({
      palette: mode === "light" ? light : dark,
      typography: {
        fontFamily: "Roboto"
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100
      }
    })
  )

export default getTheme
