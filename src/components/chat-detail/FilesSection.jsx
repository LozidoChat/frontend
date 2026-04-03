/**
 * Files Section Component
 * Displays shared files in the conversation
 */

import React from 'react';
import { FileText } from 'lucide-react';
import { COLORS, FONTS, ICON_SIZE } from '@/constants';

export function FilesSection({ files = [] }) {
  return (
    <div className="px-4 py-4 border-b" style={{ borderColor: COLORS.border }}>
      <div className="flex justify-between items-center mb-3">
        <h3
          className="text-sm font-semibold flex items-center gap-2"
          style={{ color: COLORS.text, fontFamily: FONTS.primary }}
        >
          <FileText size={ICON_SIZE.md} color={COLORS.text} />
          Shared Files
          <span style={{ color: COLORS.textSecondary }} className="text-xs">
            {files.length}
          </span>
        </h3>
        <button
          className="text-xs hover:opacity-80 transition"
          style={{ color: COLORS.textSecondary }}
        >
          See all
        </button>
      </div>

      {/* File List */}
      <div className="space-y-2">
        {files.map((file) => (
          <div
            key={file.id}
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-dark-300 cursor-pointer transition"
          >
            <span className="text-lg">{file.icon}</span>
            <span
              className="text-sm truncate"
              style={{ color: COLORS.text, fontFamily: FONTS.secondary }}
            >
              {file.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilesSection;
