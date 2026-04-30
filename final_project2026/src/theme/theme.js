import { createTheme } from '@mui/material'

const theme = createTheme({
  components: {
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        root: {
          paddingLeft: '100px !important',
          paddingRight: '100px !important',
        }
      }
    }
  }
})

export default theme