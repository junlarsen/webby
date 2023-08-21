import { UseQueryOptions } from '@tanstack/react-query';
import { Kanji } from '@/utils/types/wk-kanji';
import { Radical } from '@/utils/types/wk-radical';
import { Vocabulary } from '@/utils/types/wk-vocabulary';
import { KanaVocabulary } from '@/utils/types/wk-kana-vocabulary';

export type BearerToken = string;

export class RateLimitExceeded extends Error {
  public constructor(public readonly retryIn: number) {
    super(`rate limit exceeded, wait ${retryIn}ms before continuing`);
  }
}

export const retryWithRateLimit: UseQueryOptions['retryDelay'] = (retries, error) => {
  if (error && error instanceof RateLimitExceeded) {
    console.log(`rate limit reached, retrying in ${error.retryIn}ms`);
    return error.retryIn + 100;
  }
  return Math.min(1000 * 2 ** retries, 30000);
};

export const query = (url: string | URL, opts?: RequestInit) => {
  return async (token: BearerToken) => {
    const res = await fetch(url, {
      ...opts,
      headers: {
        Authorization: `Bearer ${token}`,
        'Wanikani-Revision': '20170710',
        ...opts?.headers,
      },
    });
    if (res.status === 429) {
      if (!res.headers.has('RateLimit-Reset')) {
        throw new Error('api did not return rate-limit specific headers');
      }
      const reset = parseInt(res.headers.get('RateLimit-Reset')!);
      const retryIn = (reset - Date.now() / 1000) * 1000;

      throw new RateLimitExceeded(retryIn);
    }

    return res;
  };
};

export const getUser = query('https://api.wanikani.com/v2/user');
export const getAssignments = query(
  'https://api.wanikani.com/v2/assignments?immediately_available_for_review=true&in_review=true',
);
export const createReview = (assignment: number, subject: number, state: 'correct' | 'incorrect') => {
  return query('https://api.wanikani.com/v2/reviews/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      review: {
        subject_id: subject,
        incorrect_meaning_answers: state === 'correct' ? 0 : 1,
        incorrect_reading_answers: state === 'correct' ? 0 : 1,
      },
    }),
  });
};

export type WordType =
  | 'expression'
  | 'numeral'
  | 'noun'
  | 'verbal_noun'
  | 'counter'
  | 'prefix'
  | 'suffix'
  | 'godan verb'
  | 'transitive verb'
  | 'ichidan verb'
  | 'する verb'
  | 'の adjective'
  | 'な adjective'
  | 'い adjective';

export type ApiObject<S> = {
  id: number;
  object: string;
  url: string;
  data_updated_at: Date;
  data: S;
};

export type Subject = Kanji | Radical | Vocabulary | KanaVocabulary;
