/**
 * ChatInput component provides a text input field with a send button for sending messages.
 * Supports RTL text input and includes a rotated send icon on the left side.
 */

import React, { useState } from 'react';
import { Paper, InputBase, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import styles from './ChatInput.module.css';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isRTL?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage, isRTL }) => {
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`${styles.inputWrapper} ${isRTL ? styles.inputWrapperRTL : ''}`}>
        <IconButton
          color="primary"
          type="submit"
          disabled={!message.trim()}
          className={styles.sendButton}
        >
          <SendIcon className={styles.sendIcon} />
        </IconButton>
        <Paper className={styles.inputContainer} elevation={1}>
          <InputBase
            className={`${styles.inputBase} ${isRTL ? styles.inputBaseRTL : ''}`}
            placeholder="במה אוכל לעזור?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            dir="rtl"
            fullWidth
          />
        </Paper>
      </div>
    </form>
  );
};

export default ChatInput; 