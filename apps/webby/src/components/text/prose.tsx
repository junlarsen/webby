import { FC, PropsWithChildren } from 'react';
import clsx from 'clsx';
import { RichText } from '@graphcms/rich-text-react-renderer';

export const Prose: FC<{ content: string }> = ({ content }) => {
  const classes = clsx(
    'max-w-3xl',
    'prose prose-gray',
    'prose-h2:text-black prose-h2:font-bold prose-h2:font-noto prose-h2:tracking-tighter prose-h2:text-2xl',
    'prose-p:leading-8 prose-p:text-gray-600',
    'prose-a:font-semibold prose-a:hover:underline prose-a:decoration-1 prose-a:mt-3 prose-a:text-lg prose-a:leading-8 prose-a:text-black',
  );

  return (
    <div className={classes}>
      <RichText content={content} />
    </div>
  );
};
