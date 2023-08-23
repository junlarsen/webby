import { hygraphQuery } from '@/queries/query-base';
import { Subject } from '@/types/subject';

export const getSubjectBySlug = async (slug: string): Promise<Subject | null> => {
  const result = await hygraphQuery(
    `
    query Subjects($slug: String!) {
      subjects(where: { slug: $slug }, first: 1) {
        createdAt
        id
        body {
          text
          raw
        }
        slug
        subjectName
        semester
      }
    }`,
    { slug },
  );
  return result.data.subjects.length === 1 ? Subject.parse(result.data.subjects[0]) : null;
};
