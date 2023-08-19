import { UseQueryOptions } from '@tanstack/react-query';

export type BearerToken = string;

export class RateLimitExceeded extends Error {
  public constructor(public readonly retryIn: number) {
    super(`rate limit exceeded, wait ${retryIn}ms before continuing`);
  }
}

export const retryWithRateLimit: UseQueryOptions['retryDelay'] = (retries, error) => {
  if (error && error instanceof RateLimitExceeded) {
    console.log(`rate limit reached, retrying in ${error.retryIn}ms`)
    return error.retryIn + 100;
  }
  return Math.min(1000 * 2 ** retries, 30000);
};

export const query = (url: string, opts?: RequestInit) => {
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
      const retryIn = (reset - (Date.now() / 1000)) * 1000;

      throw new RateLimitExceeded(retryIn);
    }

    return res;
  };
};

export const getUser = query('https://api.wanikani.com/v2/user');
export const getSubjects = (after: Date = new Date(2000, 0, 1)) =>
  query(`https://api.wanikani.com/v2/subjects?updated_after=${after.toISOString()}`);

type ISOString = string;

type CommonAttributes = {
  id: number;
  updatedAt: ISOString;
  level: number;
  documentUrl: string;
};

type Meaning = {
  meaning: string;
};

type Reading = {
  reading: string;
}

type ContextSentence = {
  en: string;
  ja: string;
}

type WordType =
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

export type Kanji = CommonAttributes & {
  characters: string;
  readings: Reading & {
    type: 'onyomi' | 'kunyomi' | 'nanori';
  }[];
  readingMnemonic: string;
  readingHint: string;
  meanings: Meaning[];
  meaningMnemonic: string;
  meaningHint: string;
};

export type Kana = CommonAttributes & {
  characters: string;
  meanings: Meaning[];
  meaningMnemonic: string;
  partsOfSpeech: WordType[];
  contextSentences: ContextSentence[]
};

export type Vocabulary = Kana & {
  readingMnemonic: string;
  readings: Reading[]
}

export type Radical = CommonAttributes & {
  characters: string | null;
  characterImage: string | null;
  meanings: Meaning[]
  meaningMnemonic: string;
}
