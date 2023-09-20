import { json } from '@remix-run/node';
import { getSubjects } from '~/queries/get-subjects';
import { useLoaderData } from '@remix-run/react';
import { Callout } from '~/components/section/callout';
import { Title } from '~/components/text/title';
import { Text } from '~/components/text/text';
import { Section } from '~/components/section/section';
import { Heading } from '~/components/text/heading';
import { SubjectPreview } from '~/components/preview/subject-preview';

export const loader = async () => {
  const subjects = await getSubjects();

  return json({ subjects });
};

export default function Page() {
  const { subjects } = useLoaderData<typeof loader>();

  return (
    <>
      <Callout>
        <Title>NTNU Emner</Title>
        <Text>
          Dette er en oversikt over notater og minikompendier jeg har satt sammen i forbindelse med eget studie på
          informatikk. Nedenfor er en liste over emner på NTNU med tilgjengelige notater. Denne listen dekker ikke alle
          fagene som er i studieløpet, da det er flere fag hvor jeg ikke tok notater, eller ikke ønsker å publisere
          disse.
        </Text>
        <Text>Del gjerne denne siden med medstudenter, den er her for å hjelpe andre &lt;3</Text>
      </Callout>
      <Section>
        <Heading>Emner</Heading>

        <div className="flex flex-col sm:flex-row mt-4 gap-4">
          {
            subjects.map((subject) => (
            <SubjectPreview subject={subject} key={subject.slug} />
          ))}
        </div>
      </Section>
    </>
  );
}
