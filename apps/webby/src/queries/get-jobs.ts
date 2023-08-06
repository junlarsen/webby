import { hygraphQuery } from '@/queries/query-base';
import { Job } from '@/types/job';

export const getJobs = async () => {
  const result = await hygraphQuery(`
    query Jobs {
      jobs {
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
  return result.data.jobs.map((x) => Job.parse(x));
};
