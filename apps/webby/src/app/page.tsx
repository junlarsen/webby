import { IntroductionSection } from '@/app/introduction-section';
import { CalloutSection } from '@/app/callout-section';
import { getRecentPosts } from '@/queries/get-recent-posts';
import { LatestPostsSection } from '@/app/latest-posts-section';
import { WorkExperienceSection } from '@/app/work-experience-section';
import { getJobs } from '@/queries/get-jobs';

export default async function Home() {
  const posts = await getRecentPosts();
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
