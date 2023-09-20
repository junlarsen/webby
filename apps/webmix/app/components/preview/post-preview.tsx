import { Post } from '~/types/post';
import { FC } from 'react';
import { Text } from '~/components/text/text';
import { Link } from '~/components/text/link';

export type PostPreviewProps = {
  post: Post;
};

export const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  return (
    <div className="border border-black text-left w-full sm:w-1/3 p-2 flex flex-col items-start">
      <h3 className="font-semibold text-lg font-noto tracking-tighter text-black">{post.title}</h3>

      <div className="flex-grow">
        <Text>{post.excerpt}</Text>
      </div>

      <Link className="mt-auto" to={`/blog/${post.slug}`}>
        Read →
      </Link>
    </div>
  );
};
