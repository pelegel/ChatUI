/**
 * Theme configuration for the chat application.
 * Defines light and dark mode themes using Material-UI's theming system.
 * Includes custom styling for scrollbars and typography.
 */

import { createTheme } from '@mui/material/styles';

// Light theme configuration
export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3', // Blue color for primary elements
    },
    secondary: {
      main: '#f50057', // Pink color for secondary elements
    },
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#ffffff',   // White background for cards/paper elements
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdbdbd',
            borderRadius: '3px',
          },
        },
      },
    },
  },
});

// Dark theme configuration
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', // Lighter blue for dark mode
    },
    secondary: {
      main: '#f48fb1', // Lighter pink for dark mode
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e',   // Slightly lighter dark for cards/paper
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#424242',
            borderRadius: '3px',
          },
        },
      },
    },
  },
}); 