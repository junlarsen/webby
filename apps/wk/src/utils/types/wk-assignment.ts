import type { ApiObject } from '@/utils/wk';

export type Assignment = ApiObject<
  {
    created_at: Date;
    subject_id: number;
    subject_type: string;
    srs_stage: number;
    unlocked_at: Date;
    started_at: Date;
    passed_at: Date;
    burned_at: Date;
    available_at: Date;
    resurrected_at: Date;
    hidden: boolean;
  },
  'assignment'
>;
