import { FC, PropsWithChildren } from 'react';

export const Text: FC<PropsWithChildren> = ({ children }) => {
  return <p className="whitespace-nowrap text-lg">{children}</p>;
};
