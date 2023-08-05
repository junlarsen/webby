'use client';

import { FC } from 'react';
import { NavLink } from '@/components/nav/link';
import { Section } from '@/components/section/section';

export const Nav: FC = () => {
  return (
    <Section className="bg-slate-100">
      <nav className="flex w-full md:flex-row md:justify-between py-4">
        <div className="flex w-full justify-between">
          <NavLink withHoverEffect={false} href="/" label="٩(◕‿◕｡)۶" />
          <div className="flex flex-row gap-x-4">
            <NavLink href="/blog" label="Blog" />
            <NavLink href="/work" label="Work" />
          </div>
        </div>
      </nav>
    </Section>
  );
};
