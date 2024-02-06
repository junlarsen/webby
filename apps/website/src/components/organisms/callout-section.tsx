import { Link } from "@/components/atoms/link";
import { Text } from "@/components/atoms/text";
import { Title } from "@/components/atoms/title";
import { NavigationLinks } from "@/components/molecules/navigation-links";
import { FC } from "react";

export const CalloutSection: FC = () => {
  return (
    <>
      <div className="md:w-2/3">
        <header>
          <Title>Mats Jun Larsen</Title>
          <span className="font-noto-serif text-grayscale-11">
            Software Engineer, Student, Open Sourcerer, and boulderer
          </span>
        </header>

        <div className="mt-6">
          <Text>
            I'm Mats Jun, a software engineer, and student based in Trondheim,
            Norway, with a passion to build solutions people love to use. I'm in
            the process of completing my degree in computer science at NTNU,
            while working as a tech consultant at Kodeworks.
          </Text>
        </div>

        <NavigationLinks className="mt-12" isHome />
      </div>
    </>
  );
};
