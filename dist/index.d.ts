// index.d.ts
declare module 'chukky-query-bot' {
    import React from 'react';
  
    export interface ChatBotProps {
      userInput: string;
      relevantKeywords?: string[];
      AboutChatBot?: string;
      model?: string;
      userAvatar?: string;
      botAvatar?: string;
      userName?: string;
      botName?: string;
      position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
      botIcon?: React.ReactNode; // Can be a React component or an image URL
    }
  
    const ChatBot: React.FC<ChatBotProps>;
    export default ChatBot;
  }
  