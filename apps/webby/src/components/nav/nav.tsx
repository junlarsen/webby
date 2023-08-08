'use client';

import { FC } from 'react';
import { NavLink } from '@/components/nav/link';
import { Section } from '@/components/section/section';

export const Nav: FC = () => {
  return (
    <Section>
      <nav className="flex w-full md:flex-row md:justify-between py-4">
        <div className="flex w-full justify-between gap-x-4">
          <NavLink withHoverEffect={false} href="/" label="军含" className="!text-3xl" title="My Chinese birth name" />
          <div className="flex flex-row gap-x-4">
            <NavLink href="/blog" label="Blog" />
            <NavLink href="/#work" label="Work" />
          </div>
        </div>
      </nav>
    </Section>
  );
};
