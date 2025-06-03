/**
 * @file ThemeProvider.tsx
 * @description This component provides a unified theme (both Material-UI and styled-components)
 * to the entire application. It allows for dynamic switching between light and dark themes.
 * It uses StyledEngineProvider to ensure Material-UI styles are injected before styled-components,
 * allowing Material-UI styles to be overridden by styled-components if necessary.
 */

import React from 'react';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

/**
 * @interface CustomThemeProviderProps
 * @description Props for the CustomThemeProvider component.
 * @property {React.ReactNode} children - The child components that will receive the theme.
 * @property {boolean} isDarkMode - Flag indicating whether dark mode is active.
 */
interface CustomThemeProviderProps {
  children: React.ReactNode;
  isDarkMode: boolean;
}

/**
 * @function CustomThemeProvider
 * @description A React functional component that wraps children with Material-UI and styled-components
 * theme providers. It selects the appropriate theme (light or dark) based on the `isDarkMode` prop.
 * @param {CustomThemeProviderProps} props - The props for the component.
 * @returns {JSX.Element} The CustomThemeProvider component.
 */
const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({ children, isDarkMode }) => {
  // Select the appropriate theme (light or dark) based on the isDarkMode prop.
  const theme = isDarkMode ? darkTheme : lightTheme;

  // StyledEngineProvider injectFirst ensures Material-UI styles take precedence where needed
  // or allows easier overriding by styled-components if custom styles are applied later.
  // Both MuiThemeProvider (for Material-UI) and StyledThemeProvider (for styled-components)
  // are used to provide the selected theme to their respective styling systems.
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledThemeProvider theme={theme}>
          {children}
        </StyledThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default CustomThemeProvider; 