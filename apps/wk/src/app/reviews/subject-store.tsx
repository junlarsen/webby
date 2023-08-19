'use client'

import { createContext, FC, PropsWithChildren, useContext, useMemo } from 'react';
import { useSubjects } from '@/utils/use-subjects';
import { BearerToken, RateLimitExceeded } from '@/utils/wk';
import { Text } from '@/components/text';

const SubjectStoreContext = createContext<any>(null);

export const useStoredSubjects = () => useContext(SubjectStoreContext)!

export const StoredSubjectProvider: FC<PropsWithChildren & { token: BearerToken }> = ({ children, token}) => {
  const { subjects, failureReason, isFetchingComplete } = useSubjects(token);

  return (
    <>
      {!isFetchingComplete ? (
        <Text>fetching subject data {failureReason instanceof RateLimitExceeded && 'waiting: rate limit exceeded'}</Text>
      ) :
        <SubjectStoreContext.Provider value={subjects}>
          {children}
        </SubjectStoreContext.Provider>
      }
      </>
  )
}
