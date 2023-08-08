'use client';

import { FC, useEffect } from 'react';
import Highlight from 'highlight.js';

export const HighlightRoot: FC = () => {
  useEffect(() => {
    Highlight.highlightAll();
  }, []);

  return <></>;
};
