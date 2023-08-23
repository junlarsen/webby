import { hygraphQuery } from '@/queries/query-base';
import { Subject } from '@/types/subject';

export const getSubjects = async (): Promise<Subject[]> => {
  const result = await hygraphQuery(
    `
    query Subjects {
      subjects(orderBy: createdAt_DESC) {
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
  );
  return result.data.subjects.map((x: unknown) => Subject.parse(x));
};
