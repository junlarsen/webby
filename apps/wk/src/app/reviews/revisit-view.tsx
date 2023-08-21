import { FC } from 'react';
import { useGameContext } from '@/app/reviews/game-context';
import { Assignment } from '@/utils/types/wk-assignment';

export const RevisitView: FC<{ assignment: Assignment }> = ({ assignment }) => {
  const { subjects } = useGameContext();
  const subject = subjects.find((s) => s.id === assignment.data.subject_id);

  return <h1>Revisiting what {subject!.data.characters} meant</h1>;
};
