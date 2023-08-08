import { getPostBySlug } from '@/queries/get-post-by-slug';
import { notFound } from 'next/navigation';
import { Section } from '@/components/section/section';
import { Heading } from '@/components/text/heading';
import { Callout } from '@/components/section/callout';
import { Title } from '@/components/text/title';
import { Text } from '@/components/text/text';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { getFormattedDate } from '@/utils/get-formatted-date';
import { Link } from '@/components/text/link';
import { HighlightRoot } from '@/app/blog/[slug]/highlight-root';
import Image from 'next/image';

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
    <article>
      <Callout>
        <Title>{post.title}</Title>
        <Text>
          <span className="text-sm text-gray-600 font-semibold">Published on {getFormattedDate(post.releaseDate)}</span>
          <br />
          {post.excerpt}
        </Text>
      </Callout>
      <Section>
        <div className="flex flex-col gap-8">
          <RichText
            renderers={{
              p: ({ children }) => <Text>{children}</Text>,
              h1: ({ children }) => (
                <div className="-mb-8">
                  <Heading as="h1">{children}</Heading>
                </div>
              ),
              h2: ({ children }) => (
                <div className="-mb-8">
                  <Heading as="h2">{children}</Heading>
                </div>
              ),
              h3: ({ children }) => (
                <div className="-mb-8">
                  <Heading as="h3">{children}</Heading>
                </div>
              ),
              h4: ({ children }) => (
                <div className="-mb-8">
                  <Heading as="h4">{children}</Heading>
                </div>
              ),
              h5: ({ children }) => (
                <div className="-mb-8">
                  <Heading as="h5">{children}</Heading>
                </div>
              ),
              h6: ({ children }) => (
                <div className="-mb-8">
                  <Heading as="h6">{children}</Heading>
                </div>
              ),
              code_block: ({ children }) => (
                <pre className="border border-black">
                  <code className="line-numbers language-tsx">{children}</code>
                </pre>
              ),
              a: ({ children, href }) => <Link href={href ?? '#'}>{children}</Link>,
            }}
            content={post.content.raw}
          />
        </div>
      </Section>
      <HighlightRoot />
    </article>
  );
}
