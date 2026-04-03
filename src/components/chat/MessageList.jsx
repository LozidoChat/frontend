/**
 * Message List Component
 * Displays all messages in the conversation
 */

import React, { useEffect, useRef } from 'react';
import { COLORS, FONTS } from '@/constants';
import { MessageBubble } from './MessageBubble';

export function MessageList({ messages = [] }) {
  const endRef = useRef(null);

  // Auto scroll to bottom
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      className="flex-1 min-h-0 overflow-y-auto p-6 space-y-4"
      style={{ backgroundColor: COLORS.surface }}
    >
      {messages.length === 0 ? (
        <div
          className="flex items-center justify-center h-full"
          style={{ color: COLORS.textSecondary }}
        >
          <p style={{ fontFamily: FONTS.primary }}>No messages yet</p>
        </div>
      ) : (
        messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))
      )}
      <div ref={endRef} />
    </div>
  );
}

export default MessageList;
