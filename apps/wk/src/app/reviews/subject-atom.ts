'use client';

import { atom } from 'recoil';
import { Subject } from '@/utils/wk';

export const subjectsAtom = atom<Subject[] | null>({
  key: 'subjects',
  default: null,
});
