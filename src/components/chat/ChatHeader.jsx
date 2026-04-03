/**
 * Chat Header Component
 * Header bar with conversation info and actions
 */

import React from 'react';
import { MoreVertical, Phone, Video } from 'lucide-react';
import { COLORS, FONTS, ICON_SIZE } from '@/constants';

export function ChatHeader({ conversation, onToggleDetail }) {
  return (
    <div
      className="flex justify-between items-center px-6 py-4"
      style={{
        backgroundColor: COLORS.surface,
      }}
    >
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
          style={{ backgroundColor: COLORS.hover }}
        >
          👥
        </div>
        <div>
          <h2
            className="text-lg font-semibold"
            style={{ fontFamily: FONTS.primary, color: COLORS.text }}
          >
            {conversation.name}
          </h2>
          <p
            className="text-xs"
            style={{ color: COLORS.textSecondary }}
          >
            {conversation.members} members, {conversation.online} online
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          className="p-2 hover:bg-dark-300 rounded-xl transition"
          style={{ color: COLORS.textSecondary }}
          title="Phone call"
        >
          <Phone size={ICON_SIZE.md} />
        </button>
        <button
          className="p-2 hover:bg-dark-300 rounded-xl transition"
          style={{ color: COLORS.textSecondary }}
          title="Video call"
        >
          <Video size={ICON_SIZE.md} />
        </button>
        <button
          className="p-2 hover:bg-dark-300 rounded-xl transition"
          style={{ color: COLORS.textSecondary }}
          onClick={onToggleDetail}
          title="Toggle details panel"
        >
          <MoreVertical size={ICON_SIZE.md} />
        </button>
      </div>
    </div>
  );
}

export default ChatHeader;
