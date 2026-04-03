/**
 * Chat Window Component
 * Main chat interface with messages and input
 */

import React, { useState } from 'react';
import { MoreVertical, MessageCircle } from 'lucide-react';
import { COLORS, FONTS, ICON_SIZE } from '@/constants';
import { ChatHeader } from './ChatHeader';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';

const SAMPLE_CONVERSATION = {
  id: 1,
  name: 'Office chat',
  members: 40,
  online: 24,
  messages: [
    {
      id: 1,
      text: 'Hi there!',
      sender: 'other',
      time: '9:22 am',
      avatar: '👤',
    },
    {
      id: 2,
      text: "We will start celebrating Ding's birthday soon",
      sender: 'other',
      time: '9:23 am',
      avatar: '👤',
    },
    {
      id: 3,
      text: "I'm stuck in traffic. I'll be there a little later",
      sender: 'user',
      time: '9:27 am',
    },
  ],
};

export function ChatWindow({ conversationId, onToggleDetail }) {
  const [messages, setMessages] = useState(SAMPLE_CONVERSATION.messages);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (text) => {
    if (text.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: text,
        sender: 'user',
        time: 'now',
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div
      className="flex flex-col h-full rounded-r-3xl overflow-hidden"
      style={{ backgroundColor: COLORS.surface }}
    >
      {/* Header */}
      <ChatHeader
        conversation={SAMPLE_CONVERSATION}
        onToggleDetail={onToggleDetail}
      />

      {/* Messages Area */}
      <MessageList messages={messages} />

      {/* Input Area */}
      <ChatInput onSend={handleSend} />
    </div>
  );
}

export default ChatWindow;
