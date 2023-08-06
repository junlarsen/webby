import { FC } from 'react';
import { Section } from '@/components/section/section';

export const Footer: FC = () => {
  return (
    <Section>
      <footer className="flex py-4 justify-between items-center">
        <p>Made with &lt;3</p>
        <p>Opinions are my own and not the views of my employer</p>
        <p>&copy; {new Date().getUTCFullYear()}</p>
      </footer>
    </Section>
  );
};
