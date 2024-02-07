import { Heading } from "@/components/atoms/heading";
import { Text } from "@/components/atoms/text";
import { Title } from "@/components/atoms/title";

const jobs = [
  {
    duration: "September 2023 - Present (part-time)",
    title: "Software Consultant at KodeWorks",
    description:
      "At KodeWorks I work as a software consultant, where I help customers build and maintain software solutions. I work with a range of technologies from Remix and React, to Spring Boot and Java. I have had the opportunity to work on projects in various industries, and have been able to contribute to the success of our customers.",
    tags: ["TypeScript", "React", "Remix", "Java", "Spring Boot", "PostGreSQL"],
  },
  {
    duration: "June 2023 - August 2023 (summer internship)",
    title: "Software Developer Intern at Capra Consulting",
    description:
      "During the summer of 2023 I worked as a software development intern at Capra Consulting. Here I worked on a project for a startup, where me and my team were able to contribute to the success of the project. Our development team worked with full-stack TypeScript, React and Angular, and we were able to learn a lot about how software is built and maintained in a professional setting.",
    tags: ["TypeScript", "React", "Angular", "MongoDB", "Agile"],
  },
  {
    duration: "November 2021 - May 2023 (part-time)",
    title: "Software Developer at Consigli",
    description:
      "At Consigli I worked as a software developer, taking on a range of tasks from building our B2C platform, to maintaining and developing applications on Azure Cloud. I worked with technologies like React, TypeScript, Python, Django and Azure Bicep, and I was able to contribute and drive development forward in a fast-paced startup environment.",
    tags: [
      "TypeScript",
      "React",
      "Python",
      "Django",
      "Azure",
      "Docker",
      "Agile",
    ],
  },
  {
    duration: "July 2019 - July 2021 (part-time)",
    title: "Front-end Developer at Nelfo / NHO",
    description:
      "During my time at Nelfo, I led the development and design of a content managementsystem and platform for promoting the Norwegian electrical industry to secondary-school students. Over the years I worked with both Vue and React, and through my creative and technical skills we were able to create an informative platform that has since been used by thousands of students.",
    tags: ["TypeScript", "React", "Next.js"],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <div className="md:w-2/3">
        <Title>Work</Title>

        <div className="mt-6">
          <Text>
            For the past 5 years I've had multiple jobs and internships in
            software development and tech consultancy. During this time I've
            built an impressive skillset, excellent teamwork skills, and a deep
            understanding of how software is built and maintained. Below you
            will find an overview of my roles, my highlights, and impact.
          </Text>
        </div>

        <div className="mt-32 flex flex-col gap-32">
          {jobs.map(({ title, duration, description, tags }) => (
            <div className="flex flex-col gap-2">
              <Heading className="inline-flex flex-col">
                <span className="font-normal tracking-tight text-sm font-noto-serif text-grayscale-11">
                  {duration}
                </span>
                <span>{title}</span>
              </Heading>
              <Text>{description}</Text>

              <div className="flex gap-2">
                {tags.map((tag) => (
                  <span className="text-sm font-noto-serif text-grayscale-11">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
