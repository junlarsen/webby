'use client';

import { Post } from '@/types/post';
import { FC } from 'react';
import { getFormattedDate } from '@/utils/get-formatted-date';
import { Text } from '@/components/text/text';
import readingTime from 'reading-time';
import { Link } from '@/components/text/link';

export type PostPreviewProps = {
  post: Post;
};

export const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  const time = readingTime(post.content.text);
  return (
    <div className="border border-black text-left rounded w-full sm:w-1/3 p-2 flex flex-col items-start">
      <div className="font-noto text-slate-600 inline-flex gap-1">
        <p>{getFormattedDate(post.releaseDate)}</p>•<p>{time.text}</p>
      </div>
      <h3 className="font-semibold text-lg font-noto tracking-tighter text-black">{post.title}</h3>

      <div className="flex-grow">
        <Text>{post.excerpt}</Text>
      </div>

      <Link className="mt-auto" href={`/blog/${post.slug}`}>
        Read →
      </Link>
    </div>
  );
};
