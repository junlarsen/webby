import fetch from 'node-fetch';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HYGRAPH_ENDPOINT: string;
      HYGRAPH_TOKEN: string;
    }
  }
}

export const hygraphQuery = async (query: string) => {
  const response = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      accept: 'application/json',
      authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  });
  return await response.json();
};
