/**
 * @file ChatMessage.tsx
 * @description This component displays an individual chat message.
 * It styles messages differently based on whether they are from the user or the assistant,
 * and supports Right-to-Left (RTL) text direction.
 * Styles are applied using CSS Modules.
 */

import React from 'react';
import { Typography, Paper } from '@mui/material'; // Box is not strictly needed if Paper is used as the primary container
import styles from './ChatMessage.module.css'; // Import CSS Modules

/**
 * @interface ChatMessageProps
 * @description Props for the ChatMessage component.
 * @property {string} message - The text content of the message.
 * @property {boolean} isUser - True if the message is from the current user, false otherwise.
 * @property {boolean} [isRTL] - Optional flag to indicate if text direction should be RTL.
 */
interface ChatMessageProps {
  message: string;
  isUser: boolean;
  isRTL?: boolean;
}

/**
 * @function ChatMessage
 * @description A React functional component that renders a single chat message.
 * It applies different styles for user and assistant messages and handles RTL text.
 * @param {ChatMessageProps} props - The props for the component.
 * @returns {JSX.Element} The ChatMessage component.
 */
const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser, isRTL }) => {
  // Dynamically construct class names for the message container
  const containerClasses = [
    styles.messageContainer,
    isUser ? styles.messageContainerUser : styles.messageContainerAssistant,
    isRTL ? styles.messageContainerRTL : styles.messageContainerLTR,
  ].join(' ');

  // Dynamically construct class names for the message bubble
  const bubbleClasses = [
    styles.messageBubble,
    isUser ? styles.messageBubbleUser : styles.messageBubbleAssistant,
  ].join(' ');

  return (
    // Outer container div for alignment and direction
    <div className={containerClasses}>
      {/* Paper component from MUI is used for the message bubble to provide elevation and themed background/color */}
      <Paper elevation={1} className={bubbleClasses}>
        <Typography variant="body1">
          {message}
        </Typography>
      </Paper>
    </div>
  );
};

export default ChatMessage; 