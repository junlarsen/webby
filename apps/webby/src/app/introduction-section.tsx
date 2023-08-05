import { FC } from 'react';
import { Section } from '@/components/section/section';
import { Title } from '@/components/text/title';
import Image from 'next/image';
import { Text } from '@/components/text/text';
import { Link } from '@/components/text/link';

export const IntroductionSection: FC = () => {
  return (
    <Section>
      <div className="flex flex-col sm:flex-row py-8 sm:py-16 gap-4">
        <div className="flex items-start w-1/4">
          <Image
            src="/assets/picture.webp"
            alt="Photograph of Mats Jun"
            width={0}
            height={0}
            sizes="100vw"
            className="w-full rounded-xl object-contain"
          />
        </div>
        <div className="w-full sm:w-3/4">
          <Title>How did we get here?</Title>
          <Text>
            Ever since I've was young, I've been fascinated with engineering and technology. During my early childhood I
            was obsessed with Lego bricks, which later turned into a love for Minecraft. A few years down the line I
            found myself tinkering with HTML and JavaScript, and eventually I began writing Minecraft server plugins.
          </Text>
          <Text>
            Today I'm a full-stack developer experienced in writing expressive web experiences using React and Next.js.
            On the server I've worked with TypeScript, Kotlin, Java and PHP. I'm also experienced in deploying
            applications to the cloud using technology like Docker, AWS Lambda, and elastic compute.
          </Text>
          <Link href="/work">Explore my work →</Link>
        </div>
      </div>
    </Section>
  );
};
