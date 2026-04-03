/**
 * Chat Detail Component
 * Right panel showing photos, files, and links for selected conversation
 */

import React from 'react';
import { X, Image, File, Link as LinkIcon } from 'lucide-react';
import { COLORS, FONTS, ICON_SIZE } from '@/constants';
import { PhotosSection } from './PhotosSection';
import { FilesSection } from './FilesSection';
import { LinksSection } from './LinksSection';

const SAMPLE_PHOTOS = [
  { id: 1, url: '🖼️', name: 'pizza.jpg' },
  { id: 2, url: '🖼️', name: 'meeting.jpg' },
];

const SAMPLE_FILES = [
  { id: 1, name: 'Project_Proposal.pdf', icon: '📄' },
  { id: 2, name: 'Budget_2024.xlsx', icon: '📊' },
];

const SAMPLE_LINKS = [
  { id: 1, title: 'Economic Policy', url: 'https://vn.liveeonomic-policy', icon: '🌐' },
  { id: 2, title: 'Microsoft', url: 'https://www.microsoft.com/', icon: '🔗' },
  { id: 3, title: 'Contact information', url: 'https://vn.liveecontact', icon: '📋' },
];

export function ChatDetail({ onClose }) {
  return (
    <div
       className="flex flex-col h-screen rounded-r-3xl overflow-hidden"
      style={{
        backgroundColor: COLORS.background,
        width: '320px',
      }}
    >
      {/* Header */}
      <div
        className="flex justify-between items-center px-6 py-4 border-b"
        style={{ borderColor: COLORS.border }}
      >
        <h2
          className="text-lg font-semibold"
          style={{ fontFamily: FONTS.primary, color: COLORS.text }}
        >
          Chat Details
        </h2>
        <button
          onClick={onClose}
          className="p-1 hover:bg-dark-300 rounded transition"
          style={{ color: COLORS.textSecondary }}
        >
          <X size={ICON_SIZE.md} />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 min-h-0 overflow-y-auto">
        {/* Photos Section */}
        <PhotosSection photos={SAMPLE_PHOTOS} />

        {/* Files Section */}
        <FilesSection files={SAMPLE_FILES} />

        {/* Links Section */}
        <LinksSection links={SAMPLE_LINKS} />
      </div>
    </div>
  );
}

export default ChatDetail;
