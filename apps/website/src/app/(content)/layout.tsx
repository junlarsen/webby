import { ConstrainedWidth } from "@/components/atoms/constrained-width";
import { NavigationLinks } from "@/components/molecules/navigation-links";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <ConstrainedWidth>
      <NavigationLinks className="mb-4" />
      {children}
    </ConstrainedWidth>
  );
}
