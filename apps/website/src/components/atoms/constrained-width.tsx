import clsx from "clsx";
import { FC, PropsWithChildren } from "react";

export type ConstrainedWidthProps = PropsWithChildren & {
  className?: string;
};

export const ConstrainedWidth: FC<ConstrainedWidthProps> = ({
  children,
  className,
}) => {
  const classes = clsx("min-w-screen min-h-screen flex", className);
  return (
    <section className={classes}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 sm:py-16 md:py-32 lg:py-48">
        {children}
      </div>
    </section>
  );
};
