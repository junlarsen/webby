'use client';

import { FC, useEffect } from 'react';
import { BearerToken, RateLimitExceeded } from '@/utils/wk';
import { useSubjects } from '@/utils/use-subjects';
import { useSetRecoilState } from 'recoil';
import { subjectsAtom } from '@/app/reviews/subject-atom';
import { reviewsAtom } from '@/app/reviews/reviews-atom';
import { useReviews } from '@/utils/use-reviews';
import { Text } from '@/components/text';
import { ReviewGame } from '@/app/reviews/review-game';
import { GameContextProvider } from '@/app/reviews/game-context';

export const Review: FC<{ token: BearerToken }> = ({ token }) => {
  const {
    hasNextPage: isSubjectFetching,
    isLoading: isSubjectLoading,
    result: subjects,
    failureReason: subjectFailureReason,
  } = useSubjects(token);
  const {
    hasNextPage: isReviewFetching,
    isLoading: isReviewLoading,
    result: reviews,
    failureReason: reviewFailureReason,
  } = useReviews(token);
  const setSubjects = useSetRecoilState(subjectsAtom);
  const setReviews = useSetRecoilState(reviewsAtom);

  useEffect(() => {
    if (!isSubjectFetching && !isSubjectLoading) {
      setSubjects(subjects);
    }
  }, [subjects, isSubjectFetching, isSubjectLoading]);

  useEffect(() => {
    if (!isReviewFetching && !isReviewLoading) {
      setReviews(reviews);
    }
  }, [reviews, isReviewFetching, isReviewLoading]);

  return (
    <>
      {isReviewFetching || isSubjectFetching || subjects === null || reviews === null ? (
        <Text>
          fetching subject data{' '}
          {subjectFailureReason instanceof RateLimitExceeded ||
            (reviewFailureReason instanceof RateLimitExceeded && 'waiting: rate limit exceeded')}
        </Text>
      ) : (
        <GameContextProvider subjects={subjects} assignments={reviews}>
          <ReviewGame token={token} />
        </GameContextProvider>
      )}
    </>
  );
};
