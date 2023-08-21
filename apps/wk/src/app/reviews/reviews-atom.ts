'use client';

import { atom } from 'recoil';
import { Assignment } from '@/utils/types/wk-assignment';

export const reviewsAtom = atom<Assignment[] | null>({
  key: 'reviews',
  default: null,
});
