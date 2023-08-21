import { BearerToken } from '@/utils/wk';
import { usePaginatedQuery } from '@/utils/use-paginated-query';

export const useSubjects = (token: BearerToken) =>
  usePaginatedQuery('subjects', 'https://api.wanikani.com/v2/subjects', token);
