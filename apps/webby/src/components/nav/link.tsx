import { ComponentPropsWithoutRef, FC } from 'react';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';
import Link from 'next/link';

export type NavLinkProps = {
  href: string;
  label: string;
  segment?: string | null;
  withHoverEffect?: boolean;
  className?: string;
} & ComponentPropsWithoutRef<typeof Link>;

export const NavLink: FC<NavLinkProps> = ({
  href,
  label,
  segment = href,
  withHoverEffect = true,
  className,
  ...props
}) => {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const isActive = selectedLayoutSegment === null || selectedLayoutSegment === segment;
  const classes = clsx(
    className,
    'align-middle text-lg py-1 font-semibold text-black decoration-1',
    withHoverEffect && 'transition-all hover:underline ease-in-out',
    isActive && withHoverEffect && 'transition-all hover:underline ease-in-out',
  );

  return (
    <Link href={href} className={classes} {...props}>
      {label}
    </Link>
  );
};
