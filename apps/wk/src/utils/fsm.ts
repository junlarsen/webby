'use client';

import { createMachine } from 'xstate';

export const createReviewMachine = () =>
  createMachine({
    predictableActionArguments: true,
    id: 'light',
    initial: 'start',
    states: {
      start: {
        on: {
          SPACE: 'show',
        },
      },
      show: {
        on: {
          ONE: 'review',
          TWO: 'review',
        },
      },
      review: {
        on: {
          Z: 'revisit',
          SPACE: 'show',
          F: 'end',
        },
      },
      revisit: {
        on: {
          Z: 'review',
        },
      },
      end: {
        type: 'final',
      },
    },
  });
