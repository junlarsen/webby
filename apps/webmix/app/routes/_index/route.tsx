import type { MetaFunction } from '@remix-run/node';
import { getPosts } from '~/queries/get-posts';
import { getJobs } from '~/queries/get-jobs';
import { CalloutSection } from '~/routes/_index/callout-section';
import { IntroductionSection } from '~/routes/_index/introduction-section';
import { LatestPostsSection } from '~/routes/_index/latest-posts-section';
import { WorkExperienceSection } from '~/routes/_index/work-experience-section';
import { useLoaderData } from '@remix-run/react';
import { json } from '@remix-run/node';
import { ProjectOverviewSection } from '~/routes/_index/project-overview-section';
import { getProjects } from '~/queries/get-projects';

export const meta: MetaFunction = () => {
  return [
    { title: 'Jun.codes | my personal piece of the internet' },
    {
      name: 'description',
      content:
        'Welcome, this is my personal website where I write about things that interest me. Hey, come take a look! <3',
    },
    {
      name: 'og:title',
      content: 'Jun.codes | my personal piece of the internet',
    },
    {
      name: 'og:description',
      content:
        'Welcome, this is my personal website where I write about things that interest me. Hey, come take a look! <3',
    },
    { name: 'og:type', content: 'website' },
    { name: 'og:site_name', content: 'Jun.codes' },
    { name: 'og:url', content: 'https://jun.codes' },
    { name: 'og:country_name', content: 'Norway' },
    { name: 'og:locale', content: 'en-US' },
  ];
};
export const loader = async () => {
  const posts = await getPosts();
  const jobs = await getJobs();
  const projects = await getProjects();

  return json({ posts, jobs, projects });
};

export default function Index() {
  const { posts, jobs, projects } = useLoaderData<typeof loader>();
  return (
    <>
      <CalloutSection />
      <IntroductionSection />
      <ProjectOverviewSection projects={projects} />
      <LatestPostsSection posts={posts} />
      <WorkExperienceSection jobs={jobs} />
    </>
  );
}
