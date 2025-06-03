/**
 * Theme configuration for the chat application.
 * Defines light and dark mode themes using Material-UI's theming system.
 * Includes custom styling for scrollbars and typography.
 * Also defines and applies CSS custom properties to the body for global style access.
 */

import { createTheme, Theme } from '@mui/material/styles'; // Import Theme type

// Helper function to generate CSS variables from a theme palette
// These variables can then be used in .module.css files.
const generateCssVariables = (theme: Theme) => {
  const variables: Record<string, string> = {};
  // Primary colors
  variables['--app-color-primary-main'] = theme.palette.primary.main;
  variables['--app-color-primary-contrast-text'] = theme.palette.primary.contrastText;

  // Background colors
  variables['--app-color-background-default'] = theme.palette.background.default;
  variables['--app-color-background-paper'] = theme.palette.background.paper;
  
  // Text colors
  variables['--app-color-text-primary'] = theme.palette.text.primary;
  variables['--app-color-text-secondary'] = theme.palette.text.secondary;
  
  return variables;
};

// Base light theme configuration (without components relying on the full theme for CSS vars)
const baseLightThemeConfig = {
  palette: {
    mode: 'light' as 'light', // Explicitly type mode
    primary: {
      main: '#2196f3', // Blue color for primary elements
      contrastText: '#ffffff', // Explicit white for contrast on blue
    },
    background: {
      default: '#f5f5f5', // Light gray background
      paper: '#ffffff',   // White background for cards/paper elements
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)', // Standard dark text for light theme
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
};

// Create the full light theme, then use it to generate CSS variables
const preliminaryLightTheme = createTheme(baseLightThemeConfig);
export const lightTheme = createTheme(preliminaryLightTheme, { // Pass preliminary to allow access to its constituted values
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...generateCssVariables(preliminaryLightTheme), // Use preliminary theme here
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#bdbdbd', // Scrollbar thumb for light theme
            borderRadius: '3px',
          },
        },
      },
    },
  },
});

// Base dark theme configuration
const baseDarkThemeConfig = {
  palette: {
    mode: 'dark' as 'dark', // Explicitly type mode
    primary: {
      main: '#90caf9', // Lighter blue for dark mode
      contrastText: 'rgba(0, 0, 0, 0.87)', // Dark text for contrast on light blue
    },
    background: {
      default: '#121212', // Dark background
      paper: '#1e1e1e',   // Slightly lighter dark for cards/paper
    },
    text: {
      primary: '#ffffff', // Standard white text for dark theme
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
};

// Create the full dark theme, then use it to generate CSS variables
const preliminaryDarkTheme = createTheme(baseDarkThemeConfig);
export const darkTheme = createTheme(preliminaryDarkTheme, { // Pass preliminary to allow access
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          ...generateCssVariables(preliminaryDarkTheme), // Use preliminary theme here
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#424242', // Scrollbar thumb for dark theme
            borderRadius: '3px',
          },
        },
      },
    },
  },
}); 