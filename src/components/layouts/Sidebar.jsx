/**
 * Sidebar Component
 * Left navigation panel with menu icons
 */

import React, { useState } from 'react';
import { 
  MessageCircle, 
  Mail, 
  Video, 
  Calendar, 
  Users, 
  Bookmark,
  Settings
} from 'lucide-react';
import { COLORS, ICON_SIZE } from '@/constants';

const NAV_ITEMS = [
  { id: 'chats', icon: MessageCircle, label: 'All Chats', active: true },
  { id: 'inbox', icon: Mail, label: 'Inbox', active: false },
  { id: 'meet', icon: Video, label: 'Meet', active: false },
  { id: 'calendar', icon: Calendar, label: 'Calendar', active: false },
  { id: 'teams', icon: Users, label: 'Teams', active: false },
  { id: 'saved', icon: Bookmark, label: 'Saved', active: false },
];

export function Sidebar({ activeTab = 'chats', onTabChange }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
       className="flex flex-col items-center py-4 rounded-l-3xl h-screen overflow-hidden"
      style={{
        backgroundColor: COLORS.background,
        width: collapsed ? '80px' : '100px',
        transition: 'width 0.3s ease',
      }}
    >
      {/* Logo */}
      <div
        className="text-white font-bold text-xl mb-8 cursor-pointer"
        style={{ color: COLORS.text }}
      >
        Zola
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-4 items-center">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => onTabChange?.(item.id)}
            className="p-3 rounded-xl transition-all hover:bg-dark-300"
            style={{
              backgroundColor: activeTab === item.id ? COLORS.hover : 'transparent',
              color: activeTab === item.id ? COLORS.text : COLORS.textSecondary,
            }}
            title={item.label}
          >
            <item.icon size={ICON_SIZE.md} />
          </button>
        ))}
      </nav>

      {/* Settings */}
      <button
        className="p-3 rounded-xl hover:bg-dark-300 transition-all"
        style={{ color: COLORS.textSecondary }}
        title="Settings"
      >
        <Settings size={ICON_SIZE.md} />
      </button>
    </aside>
  );
}

export default Sidebar;
