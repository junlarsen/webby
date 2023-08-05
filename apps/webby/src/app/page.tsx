import { IntroductionSection } from '@/app/introduction-section';
import { CalloutSection } from '@/app/callout-section';
import { getRecentPosts } from '@/queries/get-recent-posts';
import { LatestPostsSection } from '@/app/latest-posts-section';

export default async function Home() {
  const posts = await getRecentPosts();
  return (
    <>
      <CalloutSection />
      <IntroductionSection />
      <LatestPostsSection posts={posts} />
    </>
  );
}
