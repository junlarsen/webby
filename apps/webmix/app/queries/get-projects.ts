import { hygraphQuery } from '~/queries/query-base';
import { Project } from '~/types/project';

export const getProjects = async (): Promise<Project[]> => {
  const result = await hygraphQuery(
    `
    query Projects {
      projects(orderBy: priority_DESC) {
        createdAt
        id
        repository
        projectDescription
        contribution
        technologies {
          url
        }
      }
    }`,
  );
  return result.data.projects.map((x) => Project.parse(x));
};
