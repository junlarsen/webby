import { FC } from 'react';
import { Subject } from '@/utils/wk';
import { Vocabulary } from '@/utils/types/wk-vocabulary';
import { KanaVocabulary } from '@/utils/types/wk-kana-vocabulary';
import { Radical } from '@/utils/types/wk-radical';
import { Kanji } from '@/utils/types/wk-kanji';

type ShowViewProps = {
  subject: Subject;
};

export const ShowView: FC<ShowViewProps> = (props) => {
  switch (props.subject.object) {
    case 'vocabulary':
      return <VocabularyShowView subject={props.subject} />;
    case 'kana_vocabulary':
      return <KanaVocabularyShowView subject={props.subject} />;
    case 'radical':
      return <RadicalShowView subject={props.subject} />;
    case 'kanji':
      return <KanjiShowView subject={props.subject} />;
  }
};

const VocabularyShowView: FC<{ subject: Vocabulary }> = ({ subject }) => {
  return (
    <>
      <p>{subject.data.meanings.find((meaning) => meaning.primary)!.meaning}</p>
      <p>{subject.data.readings.find((reading) => reading.primary)!.reading}</p>
    </>
  );
};

const KanaVocabularyShowView: FC<{ subject: KanaVocabulary }> = ({ subject }) => {
  return (
    <>
      <>
        <p>{subject.data.meanings.find((meaning) => meaning.primary)!.meaning}</p>
        <p>{subject.data.characters}</p>
      </>
    </>
  );
};

const RadicalShowView: FC<{ subject: Radical }> = ({ subject }) => {
  return (
    <>
      <p>{subject.data.meanings.map((meaning) => meaning.meaning).join(', ')}</p>
    </>
  );
};

const KanjiShowView: FC<{ subject: Kanji }> = ({ subject }) => {
  return (
    <>
      <p>{subject.data.meanings.map((meaning) => meaning.meaning).join(', ')}</p>
      <p>{subject.data.readings.map((reading) => reading.reading).join(', ')}</p>
    </>
  );
};
