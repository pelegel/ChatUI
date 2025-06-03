/**
 * TopBar component displays the application header with the app icon.
 * Positioned at the top of the chat interface.
 */

import React from 'react';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LightMode, DarkMode } from '@mui/icons-material';
import styles from './TopBar.module.css';


interface TopBarProps {
  isSidebarOpen: boolean;
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

/**
 * TopBar Component
 * 
 * Displays the application header with the theme toggle on the left
 * and the app title on the right.
 */
const TopBar: React.FC<TopBarProps> = ({ isSidebarOpen, isDarkMode, onToggleTheme }) => {
  const theme = useTheme();

  return (
    <AppBar 
      position="fixed" 
      className={styles.appBar}
      sx={{ 
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        boxShadow: 'none',
        borderBottom: `1px solid ${theme.palette.divider}`
      }}
    >
      <Toolbar>
        <IconButton
          onClick={onToggleTheme}
          sx={{ color: theme.palette.text.primary }}
        >
          {isDarkMode ? <LightMode /> : <DarkMode />}
        </IconButton>
        <div className={`${styles.appTitle} ${isSidebarOpen ? styles.appTitleOpen : styles.appTitleClosed}`}>
          ChatPLG
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar; 