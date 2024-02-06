import { Link } from "@/components/atoms/link";
import { FC } from "react";

export const CalloutSection: FC = () => {
  return (
    <section className="max-w-7xl mx-auto p-4">
      <div className="md:w-2/3">
        <header>
          <h1 className="font-extrabold font-noto-sans tracking-tighter text-7xl">
            Mats Jun Larsen
          </h1>
          <span className="font-noto-serif text-grayscale-11">
            Software Engineer, Student, Open Sourcerer, volunteer, and boulderer
          </span>
        </header>

        <div className="mt-6">
          <p className="noto-sans text-xl">
            I'm Mats Jun, a software engineer, and student based in Trondheim,
            Norway, with a passion to build solutions people love to use. I'm in
            the process of completing my degree in computer science at NTNU,
            while working as a tech consultant at Kodeworks.
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between mt-12 gap-2">
          <div className="flex gap-4">
            <Link href="/experience">Experience</Link>
            <Link href="/foss">Open Source</Link>
            <Link href="/blog">Blog</Link>
          </div>

          <div className="flex gap-2">
            <a href="https://github.com/junlarsen">
              <img
                src="/assets/github.svg"
                alt="GitHub logo mark"
                height={24}
                width={24}
              />
            </a>
            <a href="https://linkedin.com/in/mats-jun-larsen">
              <img
                src="/assets/linkedin.svg"
                alt="LinkedIn logo mark"
                height={24}
                width={24}
              />
            </a>
            <a href="mailto:mats@jun.codes">
              <img
                src="/assets/gmail.svg"
                alt="Google mail logo mark"
                height={24}
                width={24}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
