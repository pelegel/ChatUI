/**
 * @file App.tsx
 * @description This is the root component of the ChatPLG application.
 * It sets up the theme provider (CustomThemeProvider) for managing dark/light modes
 * and renders the main Chat interface component.
 * It also includes CssBaseline for consistent styling across browsers.
 */

import React, { useState } from 'react';
import { CssBaseline } from '@mui/material';
import CustomThemeProvider from './theme/ThemeProvider';
import Chat from './components/Chat';

/**
 * @function App
 * @description The main application component.
 * It manages the global theme state (dark/light mode) and passes it down
 * to child components through the CustomThemeProvider and the Chat component.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  // State variable to track the current theme mode (true for dark, false for light).
  const [isDarkMode, setIsDarkMode] = useState(false);

  /**
   * @function toggleTheme
   * @description Toggles the application theme between dark and light modes.
   * Updates the isDarkMode state variable.
   */
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // The CustomThemeProvider wraps the application to provide theme context.
  // CssBaseline normalizes CSS across browsers.
  // The Chat component is the main UI, receiving theme state and toggle function as props.
  return (
    <CustomThemeProvider isDarkMode={isDarkMode}>
      <CssBaseline />
      <Chat isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
    </CustomThemeProvider>
  );
}

export default App;
