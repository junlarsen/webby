import { hygraphQuery } from '@/queries/query-base';
import { Post } from '@/types/post';

export const getPosts = async (limit = 3): Promise<Post[]> => {
  const result = await hygraphQuery(
    `
    query Posts($limit: Int!) {
      posts(orderBy: publishedAt_DESC, last: $limit) {
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
    }`,
    { limit },
  );
  return result.data.posts.map((x: unknown) => Post.parse(x));
};
