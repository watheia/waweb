import { createTheme, responsiveFontSizes } from "@mui/material"
import { light, dark } from "./palette"
import { ColorScheme } from "./types"

export const contentWidth = 1236

export const createMuiTheme = (mode: ColorScheme) =>
  responsiveFontSizes(
    createTheme({
      palette: mode === "light" ? light : dark,
      typography: {
        fontFamily: [
          "adobe-clean",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"'
        ].join(",")
      },
      zIndex: {
        appBar: 1200,
        drawer: 1100
      }
    })
  )
