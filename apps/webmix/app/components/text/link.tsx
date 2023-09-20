import { ComponentPropsWithoutRef, FC } from 'react';
import { Link as RemixLink } from '@remix-run/react';

export type LinkProps = ComponentPropsWithoutRef<typeof RemixLink>;

export const Link: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <RemixLink {...props} className="font-semibold hover:underline decoration-1 mt-3 text-lg leading-8 text-black">
      {children}
    </RemixLink>
  );
};
