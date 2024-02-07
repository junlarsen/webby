import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export type HeadingProps = PropsWithChildren & {
  className?: string;
};

export const Heading: FC<HeadingProps> = ({ children, className }) => {
  const classes = clsx(
    "font-extrabold font-noto-sans tracking-tighter text-4xl",
    className,
  );
  return <h2 className={classes}>{children}</h2>;
};
