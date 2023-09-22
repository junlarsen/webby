import { FC } from 'react';
import { Text } from '~/components/text/text';
import { Callout } from '~/components/section/callout';
import { Title } from '~/components/text/title';

export const CalloutSection: FC = () => {
  return (
    <Callout>
      <Title>
        Software Developer, Student,
        <br /> Open-sourcerer, and boulderer
      </Title>
      <Text>
        I'm Mats Jun, a software developer, and student based in Trondheim, Norway with a passion to build solutions
        people love to use. I'm in the process of completing my degree in computer science at NTNU, while working as a
        tech consultant at Kodeworks.
      </Text>
      <div className="flex gap-3">
        <a href="https://github.com/junlarsen">
          <img src="/assets/github.svg" alt="GitHub logo mark" height={24} width={24} />
        </a>
        <a href="https://linkedin.com/in/mats-jun-larsen">
          <img src="/assets/linkedin.svg" alt="LinkedIn logo mark" height={24} width={24} />
        </a>
        <a href="mailto:hey@jun.codes">
          <img src="/assets/gmail.svg" alt="Google mail logo mark" height={24} width={24} />
        </a>
      </div>
    </Callout>
  );
};
