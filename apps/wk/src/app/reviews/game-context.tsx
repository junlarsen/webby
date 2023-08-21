'use client';

import { ContextType, createContext, FC, PropsWithChildren, useContext } from 'react';
import { Assignment } from '@/utils/types/wk-assignment';
import { Subject } from '@/utils/wk';

const GameContext = createContext({
  assignments: [] as Assignment[],
  subjects: [] as Subject[],
});

export const useGameContext = () => useContext(GameContext);

export const GameContextProvider: FC<ContextType<typeof GameContext> & PropsWithChildren> = ({
  children,
  ...props
}) => {
  return <GameContext.Provider value={props}>{children}</GameContext.Provider>;
};
