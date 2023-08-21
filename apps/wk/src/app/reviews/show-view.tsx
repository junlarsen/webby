import { FC } from 'react';
import { Subject } from '@/utils/wk';

type ShowViewProps = {
  subject: Subject;
};

export const ShowView: FC<ShowViewProps> = (props) => {
  switch (props.subject.object) {
    case 'vocabulary':
      return <VocabularyShowView {...props} />;
    case 'kana_vocabulary':
      return <KanaVocabularyShowView {...props} />;
    case 'radical':
      return <RadicalShowView {...props} />;
    case 'kanji':
      return <KanjiShowView {...props} />;
  }
};

const VocabularyShowView: FC<ShowViewProps> = ({ subject }) => {
  return (
    <>
      <p>{subject.data.meanings.find((meaning) => meaning.primary)!.meaning}</p>
      <p>{subject.data.readings.find((reading) => reading.primary)!.reading}</p>
    </>
  );
};

const KanaVocabularyShowView: FC<ShowViewProps> = ({ subject }) => {
  return (
    <>
      <>
        <p>{subject.data.meanings.find((meaning) => meaning.primary)!.meaning}</p>
        <p>{subject.data.characters}</p>
      </>
    </>
  );
};

const RadicalShowView: FC<ShowViewProps> = ({ subject }) => {
  return (
    <>
      <p>{subject.data.meanings.map((meaning) => meaning.meaning).join(', ')}</p>
    </>
  );
};

const KanjiShowView: FC<ShowViewProps> = ({ subject }) => {
  return (
    <>
      <p>{subject.data.meanings.map((meaning) => meaning.meaning).join(', ')}</p>
      <p>{subject.data.readings.map((reading) => reading.reading).join(', ')}</p>
    </>
  );
};
