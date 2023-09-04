import { getPostBySlug } from '@/queries/get-post-by-slug';
import { notFound } from 'next/navigation';
import { Section } from '@/components/section/section';
import { Callout } from '@/components/section/callout';
import { Title } from '@/components/text/title';
import { Text } from '@/components/text/text';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { getFormattedDate } from '@/utils/get-formatted-date';
import clsx from 'clsx';
import { Metadata } from 'next';

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

      firstName: 'Mats Jun',
      lastName: 'Larsen',
      gender: 'male',
      username: 'jun_ok',
    },
  };
}

export default async function BlogPost({ params }: PageParams) {
  const post = await getPostBySlug(params.slug);

  if (post === null) {
    return notFound();
  }

  const classes = clsx(
    'max-w-3xl',
    'prose prose-gray',
    'prose-h2:text-black prose-h2:font-bold prose-h2:font-noto prose-h2:tracking-tighter prose-h2:text-2xl',
    'prose-p:leading-8 prose-p:text-gray-600',
    'prose-a:font-semibold prose-a:hover:underline prose-a:decoration-1 prose-a:mt-3 prose-a:text-lg prose-a:leading-8 prose-a:text-black',
  );

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
        <div className={classes}>
          <RichText content={post.content.raw} />
        </div>
      </Section>
    </article>
  );
}
