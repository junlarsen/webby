import type { ApiObject } from '@/utils/wk';

export type KanaVocabulary = ApiObject<{
  created_at: Date;
  level: number;
  slug: string;
  hidden_at: null;
  document_url: string;
  characters: string;
  meanings: Meaning[];
  parts_of_speech: string[];
  meaning_mnemonic: string;
  context_sentences: ContextSentence[];
  pronunciation_audios: PronunciationAudio[];
  lesson_position: number;
  spaced_repetition_system_id: number;
}>;

export interface ContextSentence {
  en: string;
  ja: string;
}

export interface Meaning {
  meaning: string;
  primary: boolean;
  accepted_answer: boolean;
}

export interface PronunciationAudio {
  url: string;
  metadata: Metadata;
  content_type: string;
}

export interface Metadata {
  gender: string;
  source_id: number;
  pronunciation: string;
  voice_actor_id: number;
  voice_actor_name: string;
  voice_description: string;
}
