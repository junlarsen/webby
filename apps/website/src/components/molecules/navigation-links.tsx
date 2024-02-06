import { Link } from "@/components/atoms/link";
import { Home } from "@carbon/icons-react";
import clsx from "clsx";
import { FC } from "react";

export type NavigationLinksProps = {
  className?: string;
  isHome?: boolean;
};

export const NavigationLinks: FC<NavigationLinksProps> = ({
  className,
  isHome = false,
}) => {
  const classes = clsx(
    "flex flex-col md:flex-row md:justify-between gap-2",
    className,
  );
  return (
    <div className={classes}>
      <div className="flex gap-4 items-center">
        {!isHome && (
          <Link href="/">
            <Home />
          </Link>
        )}
        <Link href="/experience">Experience</Link>
        <Link href="/foss">Open Source</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/about">About</Link>
      </div>

      <div className="flex gap-2">
        <a href="https://github.com/junlarsen">
          <img
            src="/assets/github.svg"
            alt="GitHub logo mark"
            height={24}
            width={24}
          />
        </a>
        <a href="https://linkedin.com/in/mats-jun-larsen">
          <img
            src="/assets/linkedin.svg"
            alt="LinkedIn logo mark"
            height={24}
            width={24}
          />
        </a>
        <a href="mailto:mats@jun.codes">
          <img
            src="/assets/gmail.svg"
            alt="Google mail logo mark"
            height={24}
            width={24}
          />
        </a>
      </div>
    </div>
  );
};
