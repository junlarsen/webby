import { BearerToken, createReview, retryWithRateLimit } from '@/utils/wk';
import { usePaginatedQuery } from '@/utils/use-paginated-query';
import { useMutation } from '@tanstack/react-query';

export const useReviews = (token: BearerToken) =>
  usePaginatedQuery(
    'reviews',
    'https://api.wanikani.com/v2/assignments?immediately_available_for_review=true&in_review=true',
    token,
  );

export const useCreateReviews = (token: BearerToken) => {
  return useMutation({
    mutationFn: async (args: Parameters<typeof createReview>) => createReview(...args)(token),
    mutationKey: [],
    retryDelay: retryWithRateLimit,
  });
};
