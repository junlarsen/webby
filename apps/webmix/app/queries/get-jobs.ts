import { hygraphQuery } from '~/queries/query-base';
import { Job } from '~/types/job';

export const getJobs = async (): Promise<Job[]> => {
  const result = await hygraphQuery(`
    query Jobs {
      jobs(orderBy: begin_DESC) {
        companyName
        role
        begin
        end
        responsibilities
        companyLogo {
          url
        }
      }
    }`);
  return result.data.jobs.map((x: unknown) => Job.parse(x));
};
