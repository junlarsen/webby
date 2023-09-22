import { FC } from 'react';
import { Section } from '~/components/section/section';
import { Heading } from '~/components/text/heading';
import { Text } from '~/components/text/text';
import { Project } from '~/types/project';
import { ProjectPreview } from '~/components/preview/project-preview';

export type ProjectOverviewSectionProps = {
  projects: Project[];
};

export const ProjectOverviewSection: FC<ProjectOverviewSectionProps> = ({ projects }) => {
  return (
    <Section>
      <div className="py-8 sm:py-16">
        <Heading id="work">Open source projects</Heading>
        <Text>
          Over the years I've contributed code to a number of open-source projects. Some of the projects are mine, most
          were made by others. Here is a highlight of the ones I've put the most time into.
        </Text>

        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          {projects.map((project) => (
            <ProjectPreview project={project} key={project.repository} />
          ))}
        </div>
      </div>
    </Section>
  );
};
