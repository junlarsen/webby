'use client';

import { FC, useEffect } from 'react';
import { createReviewMachine } from '@/utils/fsm';
import { useMachine } from '@xstate/react';
import * as Mousetrap from 'mousetrap';
import { BearerToken } from '@/utils/wk';
import { useSubjects } from '@/utils/use-subjects';

export const Review: FC<{ token: BearerToken }> = ({ token }) => {
  const [state, send] = useMachine(createReviewMachine);
  // const { data } = useSubjects(token);
  //
  // console.log(data)

  useEffect(() => {
    Mousetrap.bind('space', () => void send('SPACE'));
    Mousetrap.bind('1', () => void send('TWO'));
    Mousetrap.bind('2', () => void send('ONE'));
    Mousetrap.bind('z', () => void send('Z'));
    Mousetrap.bind('f', () => void send('F'));

    return () => void Mousetrap.reset();
  }, [state.value, send]);

  return <h1>Current state is {JSON.stringify(state.value)}</h1>;
};
