import { FC } from 'react';
import { NavLink } from '~/components/nav/link';
import { Section } from '~/components/section/section';

export const Nav: FC = () => {
  return (
    <Section>
      <nav className="flex w-full md:flex-row md:justify-between py-4">
        <div className="flex w-full justify-between gap-x-4">
          <NavLink withHoverEffect={false} to="/" label="军含" className="!text-3xl" />
          <div className="flex flex-row gap-x-4">
            <NavLink to="/blog" label="Blog" />
            <NavLink to="/#work" label="Work" />
          </div>
        </div>
      </nav>
    </Section>
  );
};
