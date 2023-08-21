import type { ApiObject } from '@/utils/wk';

export type Kanji = ApiObject<
  {
    created_at: Date;
    level: number;
    slug: string;
    hidden_at: null;
    document_url: string;
    characters: string;
    meanings: KanjiMeaning[];
    readings: KanjiReading[];
    component_subject_ids: number[];
    amalgamation_subject_ids: number[];
    visually_similar_subject_ids: number[];
    meaning_mnemonic: string;
    meaning_hint: string;
    reading_mnemonic: string;
    reading_hint: string;
    lesson_position: number;
    spaced_repetition_system_id: number;
  },
  'kanji'
>;

export interface KanjiMeaning {
  meaning: string;
  primary: boolean;
  accepted_answer: boolean;
}

export interface KanjiReading {
  type: string;
  primary: boolean;
  reading: string;
  accepted_answer: boolean;
}
