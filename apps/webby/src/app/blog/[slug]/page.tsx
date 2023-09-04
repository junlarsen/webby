import { getPostBySlug } from '@/queries/get-post-by-slug';
import { notFound } from 'next/navigation';
import { Section } from '@/components/section/section';
import { Callout } from '@/components/section/callout';
import { Title } from '@/components/text/title';
import { Text } from '@/components/text/text';
import { getFormattedDate } from '@/utils/get-formatted-date';
import { Metadata } from 'next';
import { Prose } from '@/components/text/prose';

type PageParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (post === null) {
    return notFound();
  }

  return {
    title: `${post.title} | Jun.codes`,
    openGraph: {
      title: `${post.title} | Jun.codes`,
      description: post.title,
      type: 'article',
      siteName: 'Jun.codes',
      url: `https://jun.codes/blog/${post.slug}`,
      countryName: 'Norway',
      locale: 'en-US',
      authors: [new URL('https://jun.codes')],
    },
  };
}

export default async function BlogPost({ params }: PageParams) {
  const post = await getPostBySlug(params.slug);

  if (post === null) {
    return notFound();
  }

  return (
    <article>
      <Callout>
        <Title>{post.title}</Title>
        <Text>
          <span className="text-sm text-gray-600 font-semibold">Published on {getFormattedDate(post.releaseDate)}</span>
          <br />
        </Text>
      </Callout>
      <Section>
        <Prose content={post.content.raw} />
      </Section>
    </article>
  );
}
