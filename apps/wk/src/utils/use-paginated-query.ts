import { useEffect, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { BearerToken, query, RateLimitExceeded, retryWithRateLimit } from '@/utils/wk';

export const usePaginatedQuery = (queryKey: string, initialPath: string, token: BearerToken) => {
  const infiniteQuery = useInfiniteQuery({
    queryFn: async ({ pageParam = initialPath }) => {
      const res = await query(pageParam)(token);
      return await res.json();
    },
    queryKey: [queryKey],
    getNextPageParam: (lastPage) => lastPage.pages.next_url,
    retryDelay: retryWithRateLimit,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (infiniteQuery.hasNextPage) {
      infiniteQuery.fetchNextPage();
    } else {
      // Store the data
    }
  }, [infiniteQuery.data, infiniteQuery.hasNextPage, infiniteQuery.fetchNextPage]);

  const result = useMemo(() => {
    if (infiniteQuery.data === undefined) {
      return null;
    }
    return infiniteQuery.data.pages.flatMap((response) => response.data);
  }, [infiniteQuery.data]);

  return { ...infiniteQuery, result };
};
