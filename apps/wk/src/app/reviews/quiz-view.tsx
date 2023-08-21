import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { subjectsAtom } from '@/app/reviews/subject-atom';
import { useGameContext } from '@/app/reviews/game-context';
import { Assignment } from '@/utils/types/wk-assignment';

export const QuizView: FC<{ assignment: Assignment }> = ({ assignment }) => {
  const { subjects } = useGameContext();
  const subject = subjects.find((s) => s.id === assignment.data.subject_id);

  return <h1>What does {subject!.data.characters} mean and how is it read?</h1>;
};
