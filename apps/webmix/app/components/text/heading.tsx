import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

export type HeadingProps = {
  id?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & PropsWithChildren;

export const Heading: FC<HeadingProps> = ({ children, id, as: Component = 'h2' }) => {
  const classes = clsx('font-bold text-2xl font-noto tracking-tighter text-black');

  return (
    <header>
      <Component id={id} className={classes}>
        {children}
      </Component>
    </header>
  );
};
