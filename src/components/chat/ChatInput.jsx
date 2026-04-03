/**
 * Chat Input Component
 * Message input area with attachment and send button
 */

import React, { useState } from "react";
import { Send, Plus, Smile } from "lucide-react";
import { COLORS, FONTS, ICON_SIZE } from "@/constants";

export function ChatInput({ onSend }) {
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (inputValue.trim()) {
      onSend?.(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4">
      <div className="flex gap-2 items-end">
        {/* Attachment Button */}
        <button
          className="p-2 rounded-xl hover:opacity-80 transition flex-shrink-0"
          style={{ color: COLORS.accent }}
          title="Attach file"
        >
          <Plus size={ICON_SIZE.md} />
        </button>

        {/* Input Field */}
        <textarea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Your message"
          rows="1"
          className="flex-1 px-4 py-2 rounded-2xl outline-none resize-none max-h-24"
          style={{
            backgroundColor: COLORS.primary.deepGray,
            color: COLORS.text,
            borderColor: COLORS.border,
            fontFamily: FONTS.primary,
          }}
        />

        {/* Emoji Button */}
        <button
          className="p-2 rounded-xl hover:opacity-80 transition flex-shrink-0"
          style={{  color: COLORS.textSecondary }}
          title="Emoji picker"
        >
          <Smile size={ICON_SIZE.md} />
        </button>

        {/* Send Button */}
        <button
          onClick={handleSend}
          disabled={!inputValue.trim()}
          className="p-2 rounded-xl hover:opacity-80 transition flex-shrink-0 disabled:opacity-50"
          style={{
            backgroundColor: inputValue.trim() ? COLORS.accent : COLORS.hover,
            color: COLORS.white,
          }}
          title="Send message"
        >
          <Send size={ICON_SIZE.md} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

export default ChatInput;
