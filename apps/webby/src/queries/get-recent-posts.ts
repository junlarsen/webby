import { hygraphQuery } from '@/queries/query-base';
import { Post } from '@/types/post';

export const getRecentPosts = async () => {
  const result = await hygraphQuery(`
    query Posts {
      posts(orderBy: publishedAt_DESC, last: 3) {
        createdAt
        excerpt
        id
        content {
          text
          raw
        }
        publishedAt
        releaseDate
        slug
        title
        updatedAt
      }
    }`);
  return result.data.posts.map((x) => Post.parse(x));
};
