import { ComponentPropsWithoutRef, FC } from 'react';
import { Link as RemixLink } from '@remix-run/react';
import clsx from 'clsx';

export type LinkProps = ComponentPropsWithoutRef<typeof RemixLink>;

export const Link: FC<LinkProps> = ({ children, ...props }) => {
  const classes = clsx('font-semibold hover:underline decoration-1 mt-3 text-lg leading-8 text-black', props.className);
  return (
    <RemixLink {...props} className={classes}>
      {children}
    </RemixLink>
  );
};
