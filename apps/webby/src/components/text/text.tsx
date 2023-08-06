import { FC, PropsWithChildren } from 'react';

export const Text: FC<PropsWithChildren> = ({ children }) => {
  return <p className="mt-3 text-lg leading-8 text-gray-600">{children}</p>;
};
