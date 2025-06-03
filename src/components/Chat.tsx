/**
 * Main Chat component that combines all chat-related components.
 * Manages the chat state, theme toggle, message handling, and auto-scrolling of messages.
 */

import React, { useState, useEffect, useRef } from 'react';
import { Box, IconButton, useTheme } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import ChatHistory from './ChatHistory';
import TopBar from './TopBar';
import styles from './Chat.module.css';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
}

interface Conversation {
  id: string;
  title: string;
  lastMessage: string;
  timestamp: string;
}

interface ChatProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

/**
 * Chat Component
 * 
 * Main chat interface component that manages the chat layout and state.
 * Includes the chat messages area, input field, and sidebar history.
 * Automatically scrolls to the latest message.
 */
const Chat: React.FC<ChatProps> = ({ isDarkMode, onToggleTheme }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isRTL /*, setIsRTL*/] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const theme = useTheme();
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);

  // Sample conversations data
  const conversations: Conversation[] = [
    {
      id: '1',
      title: 'צ׳אט קודם',
      lastMessage: 'היי! מה שלומך?',
      timestamp: '2:30 PM',
    },
    {
      id: '2',
      title: 'צ׳אט קודם יותר',
      lastMessage: 'היי! מה נשמע?',
      timestamp: '2:00 PM',
    },
    // Add more conversations as needed
  ];

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle sending a new message
  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages(prev => [...prev, newMessage]);

    // Simulate assistant response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'זו תשובה אוטומטית של מודל השפה',
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1000);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box className={styles.chatContainer}>
      <TopBar 
        isSidebarOpen={isSidebarOpen} 
        isDarkMode={isDarkMode}
        onToggleTheme={onToggleTheme}
      />
      
      <Box className={`${styles.mainChatArea} ${isSidebarOpen ? styles.mainChatAreaWithSidebar : ''}`}>
        <Box className={styles.chatContent}>
          <Box className={styles.messagesContainer} ref={messagesContainerRef}>
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isUser={message.isUser}
                isRTL={isRTL}
              />
            ))}
          </Box>
          <ChatInput onSendMessage={handleSendMessage} isRTL={isRTL} />
        </Box>
      </Box>

      <Box className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <IconButton
          className={styles.sidebarToggle}
          onClick={toggleSidebar}
          sx={{ color: theme.palette.text.primary }}
        >
          <MenuIcon />
        </IconButton>
        <div className={isSidebarOpen ? styles.sidebarContent : styles.sidebarContentCollapsed}>
          <ChatHistory
            conversations={conversations}
            onSelectConversation={(id) => console.log('Selected conversation:', id)}
            selectedId="1"
          />
        </div>
      </Box>
    </Box>
  );
};

export default Chat; 