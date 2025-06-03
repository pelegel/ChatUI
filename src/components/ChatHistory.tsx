/**
 * ChatHistory component displays a list of previous conversations in the sidebar.
 * Each conversation shows its title, last message, and timestamp.
 */

import React from 'react';
import { List, ListItemButton, ListItemText, Typography } from '@mui/material';
import styles from './ChatHistory.module.css';

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
}

interface ChatHistoryProps {
  conversations: Conversation[];
  onSelectConversation: (id: string) => void;
  selectedId: string;
}

/**
 * ChatHistory Component
 * 
 * Displays a list of past conversations in the sidebar.
 * Each conversation shows its title, last message, and timestamp.
 */
const ChatHistory: React.FC<ChatHistoryProps> = ({
  conversations,
  onSelectConversation,
  selectedId,
}) => {
  return (
    <div className={styles.historyContainer}>
      <Typography variant="h6" className={styles.title}>
        היסטוריית שיחות
      </Typography>
      <List>
        {conversations.map((conversation) => (
          <ListItemButton
            key={conversation.id}
            selected={conversation.id === selectedId}
            onClick={() => onSelectConversation(conversation.id)}
            className={styles.chatItem}>
            <ListItemText
              primary={conversation.title}
              secondary={conversation.lastMessage}
            />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
};

export default ChatHistory; 