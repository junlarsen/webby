import { FC, PropsWithChildren } from 'react';
import { Section } from '@/components/section/section';

export const Callout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Section>
      <div className="pt-16 pb-8 sm:pt-24 w-full sm:w-2/3 flex flex-col gap-2">{children}</div>
    </Section>
  );
};
