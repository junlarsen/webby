import { FC } from 'react';
import { Section } from '@/components/section/section';
import Image from 'next/image';
import { Text } from '@/components/text/text';

export const CalloutSection: FC = () => {
  return (
    <Section>
      <div className="pt-16 pb-8 sm:pt-24 w-full sm:w-2/3 flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Software Developer, Student,
          <br /> Open-sourcerer, and boulderer
        </h2>
        <Text>
          I'm Mats, a software developer, student, and coffee addict that's based in Trondheim, Norway with a passion to
          build solutions people love. I'm currently completing my degree in computer science at NTNU, while working as
          a tech consultant at Kodeworks.
        </Text>
        <div className="flex gap-3">
          <a href="https://github.com/matsjla">
            <Image src="/assets/github.svg" alt="GitHub logo mark" height={24} width={24} />
          </a>
          <a href="https://linkedin.com/in/mats-jun-larsen">
            <Image src="/assets/linkedin.svg" alt="LinkedIn logo mark" height={24} width={24} />
          </a>
          <a href="mailto:hey@jun.codes">
            <Image src="/assets/gmail.svg" alt="Google mail logo mark" height={24} width={24} />
          </a>
        </div>
      </div>
    </Section>
  );
};
