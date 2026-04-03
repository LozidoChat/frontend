/**
 * Conversation List Component
 * List of chat conversations with search
 */

import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { COLORS, FONTS, ICON_SIZE } from '@/constants';
import { ConversationItem } from './ConversationItem';

const SAMPLE_CONVERSATIONS = [
  {
    id: 1,
    name: 'Office chat',
    message: 'Need to ask you to pick...',
    time: '4 m',
    avatar: '👥',
    unread: 0,
    active: true,
  },
  {
    id: 2,
    name: 'Harry Feittel',
    message: 'Our community needs to prepare',
    time: '15 m',
    avatar: '👤',
    unread: 0,
  },
  {
    id: 3,
    name: 'Frank Garcia',
    message: 'Our company needs to prepare',
    time: '8:31 am',
    avatar: '👤',
    unread: 2,
  },
  {
    id: 4,
    name: 'Frank Garcia',
    message: 'Our company needs to prepare',
    time: '24 m',
    avatar: '👤',
    unread: 0,
  },
];

export function ConversationList({ onSelectConversation, activeId = 1 }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [conversations] = useState(SAMPLE_CONVERSATIONS);

  const filteredConversations = conversations.filter((conv) =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
       className="flex flex-col h-screen rounded-l-3xl overflow-hidden"
      style={{
        backgroundColor: COLORS.surface,
        width: '280px',
      }}
    >
      {/* Header */}
      <div className="px-4 pt-3 pb-2">
        {/* Search Bar */}
        <div
          className="flex items-center gap-2 px-3 py-2 rounded-xl"
          style={{ backgroundColor: COLORS.surface }}
        >
          <Search size={14} color={COLORS.textSecondary} />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent outline-none text-sm rounded-lg"
            style={{
              color: COLORS.text,
              placeholder: COLORS.textSecondary,
              fontSize: '14px',
            }}
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {filteredConversations.map((conversation) => (
          <ConversationItem
            key={conversation.id}
            conversation={conversation}
            isActive={activeId === conversation.id}
            onClick={() => onSelectConversation?.(conversation.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ConversationList;
