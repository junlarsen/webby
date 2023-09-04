import { notFound } from 'next/navigation';
import { Section } from '@/components/section/section';
import { Heading } from '@/components/text/heading';
import { Callout } from '@/components/section/callout';
import { Title } from '@/components/text/title';
import { Text } from '@/components/text/text';
import { RichText } from '@graphcms/rich-text-react-renderer';
import { Link } from '@/components/text/link';
import { HighlightRoot } from '@/app/blog/[slug]/highlight-root';
import { getSubjectBySlug } from '@/queries/get-subject-by-slug';
import { Prose } from '@/components/text/prose';

type PageParams = {
  params: {
    slug: string;
  };
};

export default async function BlogPost({ params }: PageParams) {
  const subject = await getSubjectBySlug(params.slug);

  if (subject === null) {
    return notFound();
  }

  return (
    <article>
      <Callout>
        <Title>{subject.subjectName}</Title>
        <div>
          <Text>Tatt {subject.semester}</Text>
          <Link href={`https://www.ntnu.no/studier/emner/${subject.slug.toUpperCase()}`}>Emneinformasjon</Link>
        </div>
      </Callout>
      <Section>
        <Prose content={subject.body.raw} />
      </Section>
      <HighlightRoot />
    </article>
  );
}
