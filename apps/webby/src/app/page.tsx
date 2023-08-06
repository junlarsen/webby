import { IntroductionSection } from '@/app/introduction-section';
import { CalloutSection } from '@/app/callout-section';
import { getPosts } from '@/queries/get-posts';
import { LatestPostsSection } from '@/app/latest-posts-section';
import { WorkExperienceSection } from '@/app/work-experience-section';
import { getJobs } from '@/queries/get-jobs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jun.codes | my personal piece of the internet',
  keywords: 'jun.codes, mats jun larsen, webby, supergrecko, mats jun, jun',
  openGraph: {
    title: 'Jun.codes | my personal piece of the internet',
    description:
      'Welcome, this is my personal website where I write about things that interest me. Hey, come take a look! <3',
    type: 'website',
    siteName: 'Jun.codes',
    url: 'https://jun.codes',
    countryName: 'Norway',
    locale: 'en-US',
  },
};

export default async function Home() {
  const posts = await getPosts();
  const jobs = await getJobs();
  return (
    <>
      <CalloutSection />
      <IntroductionSection />
      <LatestPostsSection posts={posts} />
      <WorkExperienceSection jobs={jobs} />
    </>
  );
}
