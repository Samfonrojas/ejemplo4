import React from 'react';

export interface ShapeStyle {
  id: string;
  name: string;
  description: string;
  feeling: string;
  idealFor: string;
  // Tailwind classes or inline styles for the preview
  containerClass: string;
  buttonClass: string;
  inputClass: string;
  imageClass: string;
  // Specific inline styles for complex shapes (organic)
  customStyle?: React.CSSProperties;
}

export type DesignPrompt = {
  businessType: string;
  styleId: string;
};

export interface AiAdviceResponse {
  fontSuggestion: string;
  colorVibe: string;
  uxTip: string;
}