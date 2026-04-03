/**
 * Conversation Item Component
 * Single conversation row in the list
 */

import React from 'react';
import { COLORS, FONTS } from '@/constants';

export function ConversationItem({
  conversation,
  isActive = false,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      className="w-[calc(100%-1rem)] mx-2 my-1 px-3 py-3 flex items-center gap-3 hover:bg-dark-300 transition text-left rounded-lg"
      style={{
        backgroundColor: isActive ? COLORS.hover : 'transparent',
      }}
    >
      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0"
        style={{ backgroundColor: COLORS.hover }}
      >
        {conversation.avatar}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h3
            className="font-semibold text-sm"
            style={{
              fontFamily: FONTS.primary,
              color: COLORS.text,
            }}
          >
            {conversation.name}
          </h3>
          <span
            className="text-xs whitespace-nowrap"
            style={{ color: COLORS.textSecondary }}
          >
            {conversation.time}
          </span>
        </div>
        <p
          className="text-xs truncate mt-1"
          style={{ color: COLORS.textSecondary }}
        >
          {conversation.message}
        </p>
      </div>

      {/* Unread Badge */}
      {conversation.unread > 0 && (
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
          style={{
            backgroundColor: COLORS.accent,
            color: COLORS.background,
          }}
        >
          {conversation.unread}
        </div>
      )}
    </button>
  );
}

export default ConversationItem;
