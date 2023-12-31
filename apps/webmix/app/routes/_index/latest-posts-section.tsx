import { FC } from 'react';
import { Post } from '~/types/post';
import { Section } from '~/components/section/section';
import { Heading } from '~/components/text/heading';
import { Text } from '~/components/text/text';
import { Link } from '~/components/text/link';
import { PostPreview } from '~/components/preview/post-preview';

export type LatestPostsSectionProps = {
  posts: Post[];
};

export const LatestPostsSection: FC<LatestPostsSectionProps> = ({ posts }) => {
  return (
    <Section>
      <Heading>Latest in writing</Heading>
      <Text>
        I've always been open about sharing experiences, and I firmly believe that the best way to learn is by teaching.
        This is my small blog where I write about topics that interest me. Some keywords you might find interesting are
        Linux, Cloud, Open source software, cooking, and bouldering.
      </Text>
      <Link to="/blog">View all posts →</Link>

      <div className="flex flex-col sm:flex-row gap-4 mt-4">
        {posts.map((post) => (
          <PostPreview post={post} key={post.slug} />
        ))}
        {posts.length === 0 && <Text>No posts available yet, stay on the lookout for updates!</Text>}
      </div>
    </Section>
  );
};
