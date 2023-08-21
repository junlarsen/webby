import { FC } from 'react';
import { useRecoilValue } from 'recoil';
import { subjectsAtom } from '@/app/reviews/subject-atom';
import { useGameContext } from '@/app/reviews/game-context';
import { Assignment } from '@/utils/types/wk-assignment';
import { IndicatorBar } from '@/components/indicator-bar';
import { Subject } from '@/utils/wk';

export const QuizView: FC<{ subject: Subject }> = ({ subject }) => {
  return (
    <>
      <h2 className="font-bold text-4xl">{subject.data.characters}</h2>
    </>
  );
};
