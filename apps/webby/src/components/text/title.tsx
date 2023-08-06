import { FC, PropsWithChildren } from 'react';

export type TitleProps = {
  id?: string;
} & PropsWithChildren;

export const Title: FC<TitleProps> = ({ id, children }) => {
  return (
    <header>
      <h1 id={id} className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
        {children}
      </h1>
    </header>
  );
};
