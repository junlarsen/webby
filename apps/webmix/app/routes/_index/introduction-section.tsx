import { FC } from 'react';
import { Section } from '~/components/section/section';
import { Heading } from '~/components/text/heading';
import { Text } from '~/components/text/text';
import { Link } from '~/components/text/link';

export const IntroductionSection: FC = () => {
  return (
    <Section>
      <div className="flex flex-col sm:flex-row py-8 sm:py-16 gap-4">
        <div className="flex items-start w-2/5">
          <img src="/picture.png" alt="Photograph of Mats Jun" className="w-full rounded-xl object-contain" />
        </div>
        <div className="w-full sm:w-3/5">
          <Heading>How did we get here?</Heading>
          <Text>
            Ever since I've was young, I've been fascinated with engineering and technology. During my early childhood I
            was obsessed with Lego bricks, which later turned into a love for the video game Minecraft. A few years down
            the line I found myself tinkering with HTML and websites, and eventually I began writing Minecraft server
            plugins.
          </Text>
          <Text>
            Today I'm a full-stack developer experienced in writing expressive web experiences. Some of the tools I work
            with include React, Next.js, TypeScript, Kotlin, PostGreSQL and Terraform. I'm also experienced with
            deploying applications on Amazon Web Services.
          </Text>
          <Link to="#work">Explore my work →</Link>
        </div>
      </div>
    </Section>
  );
};
