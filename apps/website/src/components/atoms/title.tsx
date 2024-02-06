import { FC, PropsWithChildren } from "react";

export type TitleProps = PropsWithChildren;

export const Title: FC<TitleProps> = ({ children }) => {
  return (
    <h1 className="font-extrabold font-noto-sans tracking-tighter text-7xl">
      {children}
    </h1>
  );
};
