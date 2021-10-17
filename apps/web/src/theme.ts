import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#04BFBF',
    },
    secondary: {
      main: '#507ABF',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
