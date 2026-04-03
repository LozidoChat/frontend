/**
 * Links Section Component
 * Displays shared links in the conversation
 */

import React from 'react';
import { Link as LinkIcon, ExternalLink } from 'lucide-react';
import { COLORS, FONTS, ICON_SIZE } from '@/constants';

export function LinksSection({ links = [] }) {
  return (
    <div className="px-4 py-4" style={{ borderColor: COLORS.border }}>
      <div className="flex justify-between items-center mb-3">
        <h3
          className="text-sm font-semibold flex items-center gap-2"
          style={{ color: COLORS.text, fontFamily: FONTS.primary }}
        >
          <LinkIcon size={ICON_SIZE.md} color={COLORS.text} />
          Shared Links
          <span style={{ color: COLORS.textSecondary }} className="text-xs">
            {links.length}
          </span>
        </h3>
        <button
          className="text-xs hover:opacity-80 transition"
          style={{ color: COLORS.textSecondary }}
        >
          See all
        </button>
      </div>

      {/* Links List */}
      <div className="space-y-2">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 p-2 rounded-lg hover:bg-dark-300 transition group cursor-pointer"
          >
            <span className="text-lg mt-0.5">{link.icon}</span>
            <div className="flex-1 min-w-0">
              <p
                className="text-sm font-semibold truncate"
                style={{ color: COLORS.text }}
              >
                {link.title}
              </p>
              <p
                className="text-xs truncate"
                style={{ color: COLORS.textSecondary }}
              >
                {link.url}
              </p>
            </div>
            <ExternalLink
              size={16}
              className="opacity-0 group-hover:opacity-100 transition flex-shrink-0 mt-0.5"
              style={{ color: COLORS.textSecondary }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default LinksSection;
