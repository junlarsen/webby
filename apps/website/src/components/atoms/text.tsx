import { FC, PropsWithChildren } from "react";

export type TextProps = PropsWithChildren;

export const Text: FC<TextProps> = ({ children }) => {
  return <p className="noto-sans text-xl">{children}</p>;
};
