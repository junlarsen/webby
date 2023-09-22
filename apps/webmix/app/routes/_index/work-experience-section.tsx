import { FC } from 'react';
import { Section } from '~/components/section/section';
import { Heading } from '~/components/text/heading';
import { Text } from '~/components/text/text';
import { differenceInYears } from 'date-fns';
import { Job } from '~/types/job';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { getFormattedJobRange } from '~/utils/get-formatted-date';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export type WorkExperienceSectionProps = {
  jobs: Job[];
};

export const WorkExperienceSection: FC<WorkExperienceSectionProps> = ({ jobs }) => {
  const difference = differenceInYears(new Date(), new Date(2019, 0, 0));
  return (
    <Section>
      <div className="py-8 sm:py-16">
        <Heading id="work">Things I've done</Heading>
        <Text>
          For the past {difference} years I've had multiple jobs and internships in software development and tech
          consultancy. During this time I've built an impressive skillset, excellent teamwork skills, and a deep
          understanding of how software is built and maintained. Below you will find an overview of my positions, and my
          highlights and impact.
        </Text>

        <RadixAccordion.Root
          defaultValue={[new Date(jobs[0].begin).toISOString()]}
          type="multiple"
          className="border border-black divide-y divide-black mt-4"
        >
          {jobs.map((job) => (
            <RadixAccordion.Item
              value={new Date(job.begin).toISOString()}
              key={new Date(job.begin).toISOString()}
              className="mt-px overflow-hidden first:mt-0"
            >
              <RadixAccordion.Trigger className="text-black w-full shadow hover:bg-slate-100 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-2 leading-none shadow-[0_1px_0] outline-none">
                <div className="font-semibold">
                  {job.role} at {job.companyName}
                </div>
                <div className="text-gray-600 inline-flex gap-2 text-[15px]">
                  {getFormattedJobRange(new Date(job.begin), job.end ? new Date(job.end) : null)}
                  <div className="text-black">
                    <ChevronDownIcon
                      className="text-black ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                      aria-hidden
                    />
                  </div>
                </div>
              </RadixAccordion.Trigger>
              <RadixAccordion.Content className="text-gray-600 p-4 bg-slate-100 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                <ul className="list-disc list-inside text-black">
                  {job.responsibilities.map((responsibility) => (
                    <li key={responsibility}>
                      <span className="-ml-2 text-gray-600">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </RadixAccordion.Content>
            </RadixAccordion.Item>
          ))}
        </RadixAccordion.Root>
      </div>
    </Section>
  );
};
