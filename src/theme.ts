import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    trello: {
      appBarHeight: string
      boardBarHeight: string
      boardContentHeight: string
    }
  }
  // allow configuration using `createTheme()`
  interface ThemeOptions {
    trello?: {
      appBarHeight?: string
      boardBarHeight?: string
      boardContentHeight?: string
    }
  }
}

const APP_BAR_HEIGHT = '56px'
const BOARD_BAR_HEIGHT = '64px'
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

const theme = createTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
  },
  colorSchemes: {
    light: {},
    dark: {},
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {
          // Firefox scrollbar
          scrollbarColor: `${theme.palette.action.disabled} ${theme.palette.background.default}`,

          // Chrome/Safari scrollbar
          '&::-webkit-scrollbar': {
            width: 4,
            height: 4,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.action.disabled,
            borderRadius: 4,
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }),
    },

    // Button components
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },

    // Input components
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: '0.875rem',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: theme.palette.divider,
            borderWidth: '1px',
          },
          '&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderWidth: '2px',
          },
        }),
      },
    },

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
        },
      },
    },

    // Menu components
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
          minHeight: 42,
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': {
            fontSize: '0.875rem',
          },
        },
      },
    },
  },
})

export default theme
