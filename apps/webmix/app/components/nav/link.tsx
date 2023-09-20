import { ComponentPropsWithoutRef, FC } from 'react';
import clsx from 'clsx';
import { NavLink as RemixNavLink } from '@remix-run/react';

export type NavLinkProps = {
  label: string;
  withHoverEffect?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<typeof RemixNavLink>;

export const NavLink: FC<NavLinkProps> = ({ label, withHoverEffect = true, className, ...props }) => {
  return (
    <RemixNavLink
      className={({ isActive }) =>
        clsx(
          className,
          'align-middle text-lg py-1 font-semibold text-black decoration-1',
          withHoverEffect && 'transition-all hover:underline ease-in-out',
          isActive && withHoverEffect && 'transition-all hover:underline ease-in-out',
        )
      }
      {...props}
    >
      {label}
    </RemixNavLink>
  );
};
