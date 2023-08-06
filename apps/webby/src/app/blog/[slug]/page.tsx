import { getPostBySlug } from '@/queries/get-post-by-slug';
import { notFound } from 'next/navigation';
import { Section } from '@/components/section/section';
import { Heading } from '@/components/text/heading';
import { Callout } from '@/components/section/callout';
import { Title } from '@/components/text/title';
import { Text } from '@/components/text/text';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { getFormattedDate } from '@/utils/get-formatted-date';

type PageParams = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: PageParams) {
  const post = await getPostBySlug(params.slug);

  if (post === null) {
    return notFound();
  }

  return (
    <>
      <Callout>
        <Title>{post.title}</Title>
        <Text>
          <span className="text-sm text-gray-600 font-semibold">Published on {getFormattedDate(post.releaseDate)}</span>
          <br />
          {post.excerpt}
        </Text>
      </Callout>
      <Section>
        <RichText content={post.content.raw} />
      </Section>
    </>
  );
}
