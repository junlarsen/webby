import { FC } from 'react';
import { Section } from '@/components/section/section';

export const Footer: FC = () => {
  return (
    <Section>
      <footer className="flex font-light py-4 justify-between items-center">
        <p>Made with &lt;3</p>
        <p>&copy; {new Date().getUTCFullYear()}</p>
      </footer>
    </Section>
  );
};
