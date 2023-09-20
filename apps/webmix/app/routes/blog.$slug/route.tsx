import { json, LoaderFunctionArgs, MetaFunction } from '@remix-run/node';
import { getPostBySlug } from '~/queries/get-post-by-slug';
import { useLoaderData } from '@remix-run/react';
import { Callout } from '~/components/section/callout';
import { Title } from '~/components/text/title';
import { Text } from '~/components/text/text';
import { getFormattedDate } from '~/utils/get-formatted-date';
import { Section } from '~/components/section/section';
import { Prose } from '~/components/text/prose';

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  const post = data!
  return [
    { title: `${post.title} | Jun.codes` },
    { name: 'description', content: post.excerpt },
    {
      name: 'og:title',
      content: `${post.title} | Jun.codes`,
    },
    {
      name: 'og:description',
      content: post.excerpt,
    },
    { name: 'og:type', content: 'article' },
    { name: 'og:site_name', content: 'Jun.codes' },
    { name: 'og:url', content: `https://jun.codes/blog/${post.slug}` },
    { name: 'article:author', content: 'https://jun.codes' },
  ];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const post = await getPostBySlug(params.slug!);
  if (post === null) {
    throw new Response('Not Found', { status: 400 });
  }
  return json(post);
};

export default function BlogPost() {
  const post = useLoaderData<typeof loader>();

  return (
    <article>
      <Callout>
        <Title>{post.title}</Title>
        <Text>
          <span className="text-sm text-gray-600 font-semibold">
            Published on {getFormattedDate(new Date(post.releaseDate))}
          </span>
          <br />
        </Text>
      </Callout>
      <Section>
        <Prose content={post.content.raw} />
      </Section>
    </article>
  );
}
