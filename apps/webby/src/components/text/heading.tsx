import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export type HeadingProps = {
  id?: string;
} & PropsWithChildren;

export const Heading: FC<HeadingProps> = ({ children, id }) => {
  const classes = clsx('font-bold text-2xl font-noto tracking-tighter text-black');

  return (
    <header>
      <h2 id={id} className={classes}>
        {children}
      </h2>
    </header>
  );
};
