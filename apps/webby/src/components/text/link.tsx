import { ComponentPropsWithoutRef, FC } from 'react';
import NextLink from 'next/link';

export type LinkProps = ComponentPropsWithoutRef<typeof NextLink>;

export const Link: FC<LinkProps> = ({ children, ...props }) => {
  return (
    <NextLink {...props} className="font-semibold hover:underline decoration-1 mt-3 text-lg leading-8 text-black">
      {children}
    </NextLink>
  );
};
