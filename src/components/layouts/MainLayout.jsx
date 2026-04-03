/**
 * Main Layout Component
 * Combines all 4 panels: Sidebar, ConversationList, ChatWindow, ChatDetail
 */

import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { ConversationList } from '@/components/conversations/ConversationList';
import { ChatWindow } from '@/components/chat/ChatWindow';
import { ChatDetail } from '@/components/chat-detail/ChatDetail';
import { COLORS } from '@/constants';

export function MainLayout() {
  const [activeTab, setActiveTab] = useState('chats');
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [isDetailOpen, setIsDetailOpen] = useState(true);

  return (
     <div
       className="flex h-screen overflow-hidden gap-0"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* 1. Sidebar (Left) */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* 2. Conversation List (Left-Middle) */}
      {activeTab === 'chats' && (
        <ConversationList
          onSelectConversation={setSelectedConversation}
          activeId={selectedConversation}
        />
      )}

      {/* 3. Chat Window (Center) - Main Content */}
      <div className="flex-1 flex flex-col">
        <ChatWindow
          conversationId={selectedConversation}
          onToggleDetail={() => setIsDetailOpen(!isDetailOpen)}
        />
      </div>

      {/* 4. Chat Detail (Right) - Toggle with button */}
      {isDetailOpen && (
        <ChatDetail onClose={() => setIsDetailOpen(false)} />
      )}
    </div>
  );
}

export default MainLayout;
