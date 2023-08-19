import { useEffect, useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { BearerToken, query, RateLimitExceeded, retryWithRateLimit } from '@/utils/wk';

export const useSubjects = (token: BearerToken) => {
  const infiniteQuery = useInfiniteQuery({
    queryFn: async ({ pageParam = 'https://api.wanikani.com/v2/subjects' }) => {
      const res = await query(pageParam)(token);
      return await res.json();
    },
    queryKey: ['subjects'],
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

  const subjects = useMemo(() => {
    if (infiniteQuery.data === undefined) {
      return []
    }
    return infiniteQuery.data.pages.flatMap((response) => response.data);
  }, [infiniteQuery.data]);

  const isFetchingComplete = useMemo(() => {
    return infiniteQuery.isLoading || infiniteQuery.isFetching || infiniteQuery.hasNextPage
  }, [infiniteQuery.isLoading, infiniteQuery.isFetching, infiniteQuery.hasNextPage])

  return { ...infiniteQuery, subjects, isFetchingComplete };
};
