import { FC, useEffect, useMemo } from 'react';
import { BearerToken } from '@/utils/wk';
import { useMachine } from '@xstate/react';
import * as Mousetrap from 'mousetrap';
import { QuizView } from '@/app/reviews/quiz-view';
import { useRouter } from 'next/navigation';
import { ShowView } from '@/app/reviews/show-view';
import { RevisitView } from '@/app/reviews/revisit-view';
import { assign, createMachine } from 'xstate';
import { useGameContext } from '@/app/reviews/game-context';
import { useCreateReviews } from '@/utils/use-reviews';
import { IndicatorBar } from '@/components/indicator-bar';

type ReviewGameProps = { token: BearerToken };

export const ReviewGame: FC<ReviewGameProps> = ({ token }) => {
  const { assignments, subjects } = useGameContext();
  const router = useRouter();
  const { mutate: createReview } = useCreateReviews(token);

  const [state, send] = useMachine(() =>
    createMachine(
      {
        predictableActionArguments: true,
        context: {
          assignments,
          index: 0,
        },
        id: 'light',
        initial: 'start',
        states: {
          start: {
            on: {
              SPACE: 'show',
              F: 'end',
            },
          },
          show: {
            on: {
              ONE: {
                target: 'review',
                actions: ['onQuizCorrect'],
              },
              TWO: {
                target: 'review',
                actions: ['onQuizIncorrect'],
              },
            },
          },
          review: {
            on: {
              Z: 'revisit',
              SPACE: 'show',
              F: 'end',
            },
          },
          revisit: {
            on: {
              Z: 'review',
            },
          },
          end: {
            type: 'final',
          },
        },
      },
      {
        actions: {
          onQuizCorrect: assign({
            index: (context) => {
              createReview([
                context.assignments[context.index].id,
                context.assignments[context.index].data.subject_id,
                'correct',
              ]);
              if (context.index >= /* context.assignments!.length */ 5) {
                send('F');
                return context.index;
              }
              return context.index + 1;
            },
          }),
          onQuizIncorrect: assign({
            index: (context) => {
              createReview([
                context.assignments[context.index].id,
                context.assignments[context.index].data.subject_id,
                'incorrect',
              ]);
              if (context.index >= context.assignments.length) {
                send('F');
                return context.index;
              }
              return context.index + 1;
            },
          }),
        },
      },
    ),
  );

  useEffect(() => {
    Mousetrap.bind('space', () => void send('SPACE'));
    Mousetrap.bind('1', () => void send('ONE'));
    Mousetrap.bind('2', () => void send('TWO'));
    Mousetrap.bind('z', () => void send('Z'));
    Mousetrap.bind('f', () => void send('F'));

    return () => void Mousetrap.reset();
  }, [state.value, send]);

  useEffect(() => {
    if (state.value === 'end') {
      router.push('/completed');
    }
  }, [state.value]);
  const assignment = state.context.assignments[state.context.index];
  const subject = useMemo(() => {
    return subjects.find((subject) => subject.id === assignment.data.subject_id)!;
  }, [subjects, assignment]);

  return (
    <>
      <IndicatorBar subject={subject} />
      <button onClick={() => send('SPACE')} className="flex-grow w-full text-center">
        {state.value === 'start' || state.value === 'review' ? (
          <QuizView subject={subject} />
        ) : state.value === 'show' ? (
          <ShowView subject={subject} />
        ) : state.value === 'revisit' ? (
          // TODO: implement this fully
          <RevisitView subject={subject} />
        ) : null}
      </button>

      {state.value === 'show' && (
        <div className="w-full flex text-center border-t border-black divide-x divide-black">
          <button onClick={() => send('ONE')} className="w-1/2 p-4">
            Correct (1)
          </button>
          <button onClick={() => send('TWO')} className="w-1/2 p-4">
            Incorrect (2)
          </button>
        </div>
      )}
    </>
  );
};
