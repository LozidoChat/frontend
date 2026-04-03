/**
 * Photos Section Component
 * Displays photos shared in the conversation
 */

import React from 'react';
import { Image } from 'lucide-react';
import { COLORS, FONTS, ICON_SIZE } from '@/constants';

export function PhotosSection({ photos = [] }) {
  return (
    <div className="px-4 py-4 border-b" style={{ borderColor: COLORS.border }}>
      <div className="flex justify-between items-center mb-3">
        <h3
          className="text-sm font-semibold flex items-center gap-2"
          style={{ color: COLORS.text, fontFamily: FONTS.primary }}
        >
          <Image size={ICON_SIZE.md} color={COLORS.text} />
          Photos and Videos
          <span style={{ color: COLORS.textSecondary }} className="text-xs">
            {photos.length}
          </span>
        </h3>
        <button
          className="text-xs hover:opacity-80 transition"
          style={{ color: COLORS.textSecondary }}
        >
          See all
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-2">
        {photos.slice(0, 6).map((photo) => (
          <div
            key={photo.id}
            className="aspect-square rounded-xl cursor-pointer hover:opacity-80 transition flex items-center justify-center text-2xl"
            style={{ backgroundColor: COLORS.surface }}
            title={photo.name}
          >
            {photo.url}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotosSection;
