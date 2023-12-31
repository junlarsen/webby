import { getPosts } from '~/queries/get-posts';
import { PostPreview } from '~/components/preview/post-preview';
import { Heading } from '~/components/text/heading';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Title } from '~/components/text/title';
import { Text } from '~/components/text/text';
import { Callout } from '~/components/section/callout';
import { Section } from '~/components/section/section';

export const loader = async () => {
  const posts = await getPosts();

  return json({ posts });
};

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <>
      <Callout>
        <Title>The blog</Title>
        <Text>
          This is my blog, a small space where I write about things that make me curious and things that interest me.
          Here you can expect to find articles about topics from programming and open-source software, to home cooking,
          climbing, and the Japanese language.
        </Text>
      </Callout>
      <Section>
        <Heading>{posts.length} posts available</Heading>

        <div className="flex flex-col sm:flex-row mt-4 gap-4">
          {posts.map((post) => (
            <PostPreview post={post} key={post.slug} />
          ))}
        </div>
      </Section>
    </>
  );
}
