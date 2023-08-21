import type { ApiObject, WordType } from '@/utils/wk';

export type Vocabulary = ApiObject<{
  created_at: Date;
  level: number;
  slug: string;
  hidden_at: Date;
  document_url: string;
  characters: string;
  meanings: VocabularyMeaning[];
  readings: VocabularyReading[];
  parts_of_speech: WordType[];
  component_subject_ids: number[];
  meaning_mnemonic: string;
  reading_mnemonic: string;
  context_sentences: ContextSentence[];
  pronunciation_audios: PronunciationAudio[];
  lesson_position: number;
  spaced_repetition_system_id: number;
}>;

export interface ContextSentence {
  en: string;
  ja: string;
}

export interface VocabularyMeaning {
  meaning: string;
  primary: boolean;
  accepted_answer: boolean;
}

export interface PronunciationAudio {
  url: string;
  metadata: PronunciationAudioMetadata;
  content_type: string;
}

export interface PronunciationAudioMetadata {
  gender: string;
  source_id: number;
  pronunciation: string;
  voice_actor_id: number;
  voice_actor_name: string;
  voice_description: string;
}

export interface VocabularyReading {
  primary: boolean;
  reading: string;
  accepted_answer: boolean;
}
