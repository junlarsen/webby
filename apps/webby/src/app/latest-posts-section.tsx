import { FC } from 'react';
import { Post } from '@/types/post';
import { Section } from '@/components/section/section';
import { Title } from '@/components/text/title';
import { Text } from '@/components/text/text';
import { Link } from '@/components/text/link';
import { PostPreview } from '@/components/preview/post-preview';

export type LatestPostsSectionProps = {
  posts: Post[];
};

export const LatestPostsSection: FC<LatestPostsSectionProps> = ({ posts }) => {
  return (
    <Section>
      <Title>Latest blog posts</Title>
      <Text>
        I've always been open about sharing experiences, and I'm a firm believe that the best way to learn is by
        teaching others. This is my blog where I write about topics that interest me. Some keywords you might find
        interesting are Linux, Open source, cooking and the Japanese language.
      </Text>
      <Link href="/blog">View all posts →</Link>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        {posts.map((post) => (
          <PostPreview post={post} key={post.slug} />
        ))}
      </div>
    </Section>
  );
};