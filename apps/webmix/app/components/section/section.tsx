import { FC, PropsWithChildren } from 'react';

export type SectionProps = {
  className?: string;
} & PropsWithChildren;

export const Section: FC<SectionProps> = ({ className, children }) => {
  return (
    <section className={className}>
      <div className="max-w-5xl mx-auto p-3 w-full">{children}</div>
    </section>
  );
};
