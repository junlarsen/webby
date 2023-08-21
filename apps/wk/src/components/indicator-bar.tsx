import { FC } from 'react';
import { Subject } from '@/utils/wk';
import clsx from 'clsx';

export const IndicatorBar: FC<{ subject: Subject }> = ({ subject }) => {
  const classes = clsx(
    {
      'bg-[#ff00aa]': subject.object === 'kanji',
      'bg-[#aa00ff]': subject.object === 'kana_vocabulary' || subject.object === 'vocabulary',
      'bg-[#00aaff]': subject.object === 'radical',
    },
    'h-1 rounded w-full',
  );
  return <hr className={classes} />;
};
