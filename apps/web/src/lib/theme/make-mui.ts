import { createTheme, responsiveFontSizes } from "@mui/material"
import { light, dark } from "./palette"
import { ColorScheme } from "./types"

export const contentWidth = 1236

export const makeMuiTheme = (mode: ColorScheme) =>
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


