/**
 * Message Bubble Component
 * Single message bubble (incoming or outgoing)
 */

import React from 'react';
import { COLORS, FONTS } from '@/constants';

export function MessageBubble({ message }) {
  const isOutgoing = message.sender === 'user';

  return (
    <div className={`flex ${isOutgoing ? 'justify-end' : 'justify-start'}`}>
      <div className="flex items-end gap-2 max-w-xs">
        {/* Avatar for incoming messages */}
        {!isOutgoing && (
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0"
            style={{ backgroundColor: COLORS.hover }}
          >
            {message.avatar}
          </div>
        )}

        {/* Message bubble */}
        <div
          className="px-4 py-2 rounded-2xl"
          style={{
            backgroundColor: isOutgoing
              ? COLORS.chatOutgoing
              : COLORS.chatIncoming,
            color: isOutgoing ? COLORS.textOutcoming : COLORS.text,
          }}
        >
          <p
            className="text-sm"
            style={{ fontFamily: FONTS.primary }}
          >
            {message.text}
          </p>
          <span
            className="text-xs mt-1 block"
            style={{
              color: isOutgoing ? 'rgba(255, 255, 255, 0.92)' : COLORS.textSecondary,
            }}
          >
            {message.time}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;
