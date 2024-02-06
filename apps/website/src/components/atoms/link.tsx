import clsx from "clsx";
import NextLink, { LinkProps as NextLinkProps } from "next/link";
import { PropsWithChildren } from "react";

export type LinkProps = {
  className?: string;
} & NextLinkProps &
  PropsWithChildren;

export const Link = ({ className, children, ...props }: LinkProps) => {
  const classes = clsx(
    "w-fit font-bold text-lg underline",
    "transition-color duration-500 ease-in-out",
    "hover:text-brand-11",
    className,
  );
  return (
    <NextLink className={classes} {...props}>
      {children}
    </NextLink>
  );
};
