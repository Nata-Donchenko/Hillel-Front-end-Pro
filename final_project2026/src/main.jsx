import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom"
import { Provider } from "react-redux"
import { ThemeProvider } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline'
import store from "@store"
import routerConfig from "@router"
import theme from "@/theme/theme"

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routerConfig} />
    </ThemeProvider>
  </Provider>
)