import { json, LoaderFunctionArgs } from '@remix-run/node';
import { getSubjectBySlug } from '~/queries/get-subject-by-slug';
import { Link, useLoaderData } from '@remix-run/react';
import { Callout } from '~/components/section/callout';
import { Title } from '~/components/text/title';
import { Text } from '~/components/text/text';
import { Section } from '~/components/section/section';
import { Prose } from '~/components/text/prose';
import { HighlightRoot } from '~/components/code/highlight-root';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const subject = await getSubjectBySlug(params.slug!);
  if (subject === null) {
    throw new Response('Not Found', { status: 404 });
  }

  return json(subject);
};

export default function BlogPost() {
  const subject = useLoaderData<typeof loader>();
  const reference = `https://www.ntnu.no/studier/emner/${subject.slug.toUpperCase()}`;

  return (
    <article>
      <Callout>
        <Title>{subject.subjectName}</Title>
        <div>
          <Text>Tatt {subject.semester}</Text>
          <Link to={reference}>Emneinformasjon</Link>
        </div>
      </Callout>
      <Section>
        <Prose content={subject.body.raw} />
      </Section>
      <HighlightRoot />
    </article>
  );
}
