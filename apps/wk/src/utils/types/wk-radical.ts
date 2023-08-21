import { ApiObject } from '@/utils/wk';

export type Radical = ApiObject<{
  created_at: Date;
  level: number;
  slug: string;
  hidden_at: null;
  document_url: string;
  characters: string;
  character_images: CharacterImage[];
  meanings: Meaning[];
  amalgamation_subject_ids: number[];
  meaning_mnemonic: string;
  lesson_position: number;
  spaced_repetition_system_id: number;
}>;
export interface CharacterImage {
  url: string;
  metadata: Metadata;
  content_type: string;
}

export interface Metadata {
  color?: string;
  dimensions?: string;
  style_name?: string;
  inline_styles?: boolean;
}

export interface Meaning {
  meaning: string;
  primary: boolean;
  accepted_answer: boolean;
}
