import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export const Title: FC<PropsWithChildren> = ({ children }) => {
  const classes = clsx('font-bold text-2xl font-noto tracking-tighter text-black');

  return <h1 className={classes}>{children}</h1>;
};
