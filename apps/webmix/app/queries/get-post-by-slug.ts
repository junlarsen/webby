import { Post } from '~/types/post';
import { hygraphQuery } from '~/queries/query-base';

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const result = await hygraphQuery(
    `
    query Posts($slug: String!) {
      posts(where: { slug: $slug }, first: 1) {
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
    { slug },
  );
  return result.data.posts.length === 1 ? Post.parse(result.data.posts[0]) : null;
};
