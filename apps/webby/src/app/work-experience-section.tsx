'use client';

import { FC } from 'react';
import { Section } from '@/components/section/section';
import { Title } from '@/components/text/title';
import { Text } from '@/components/text/text';
import { differenceInYears } from 'date-fns';
import { Job } from '@/types/job';
import * as RadixAccordion from '@radix-ui/react-accordion';
import { getFormattedJobRange } from '@/utils/get-formatted-date';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export type WorkExperienceSectionProps = {
  jobs: Job[];
};

export const WorkExperienceSection: FC<WorkExperienceSectionProps> = ({ jobs }) => {
  const difference = differenceInYears(new Date(), new Date(2019, 0, 0));
  return (
    <Section>
      <div className="py-8 sm:py-16">
        <Title>Work & Career</Title>
        <Text>
          For the past {difference} years I've worked part-time jobs as well as summer internships as a software
          developer. During this time I've built good teamwork skills and a deep understanding of how software is
          actually built and maintained.
        </Text>

        <RadixAccordion.Root type="multiple" className="border border-black divide-y divide-black mt-4">
          {jobs.map((job) => (
            <RadixAccordion.Item
              value={job.begin.toISOString()}
              key={job.begin.toISOString()}
              className="mt-px overflow-hidden first:mt-0"
            >
              <RadixAccordion.Trigger className="text-black w-full shadow hover:bg-slate-100 group flex h-[45px] flex-1 cursor-default items-center justify-between bg-white px-2 leading-none shadow-[0_1px_0] outline-none">
                <div className="font-semibold">
                  {job.role} at {job.companyName}
                </div>
                <div className="text-gray-600 inline-flex gap-2 text-[15px]">
                  {getFormattedJobRange(job.begin, job.end)}
                  <ChevronDownIcon
                    className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:rotate-180"
                    aria-hidden
                  />
                </div>
              </RadixAccordion.Trigger>
              <RadixAccordion.Content className="text-gray-600 p-2 bg-slate-100 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden">
                <ul className="list-disc list-inside">
                  {job.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
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