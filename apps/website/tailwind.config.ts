import * as colors from "@radix-ui/colors";
import type { Config } from "tailwindcss";

function transformScale(scale: Record<string, string>): Record<string, string> {
  const tw = Object.entries(scale).map(([key, value]) => [
    key.replace(/[A-Za-z]+/, ""),
    value,
  ]);
  return Object.fromEntries(tw);
}

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        brand: transformScale(colors.cyan),
        grayscale: transformScale(colors.slate),
      },
      maxWidth: {
        baseline: "120rem",
      },
      fontFamily: {
        "noto-serif": ['"Noto Serif Display"', "serif"],
        "source-serif-4": ["'Source Serif 4'", "serif"],
        raleway: ['"Raleway"', "sans-serif"],
      },
      keyframes: {
        slideDown: {},
      },
    },
  },
} satisfies Config;
