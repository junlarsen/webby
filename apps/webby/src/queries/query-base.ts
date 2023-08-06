declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HYGRAPH_ENDPOINT: string;
      HYGRAPH_TOKEN: string;
    }
  }
}

export const hygraphQuery = async (query: string, variables: Record<string, unknown> = {}): Promise<any> => {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
    next: {
      revalidate: 5,
    },
  });
  return await response.json();
};
