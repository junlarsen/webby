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
      fontFamily: {
        "noto-sans": ["'Noto Sans'", "sans-serif"],
        "noto-serif": ["'Noto Serif'", "serif"],
      },
      keyframes: {
        slideDown: {},
      },
    },
  },
} satisfies Config;
