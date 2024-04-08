"use client";

// contexts
import { useFontContext } from "@/contexts/font-context";
// fonts
import { sansSerif, serif, mono } from "@/lib/fonts";

function Body({ children }) {
  const { font } = useFontContext();

  let fontFormat;

  // Set the font format
  switch (font) {
    case "sans-serif":
      fontFormat = sansSerif;
      break;
    case "serif":
      fontFormat = serif;
      break;
    case "mono":
      fontFormat = mono;
      break;
    default:
      fontFormat = sansSerif;
  }

  return (
    <body
      className={`bg-neutral-white dark:bg-neutral-black h-screen box-border text-neutral-black dark:text-neutral-white transition-all duration-200 ${fontFormat.className}`}
    >
      {children}
    </body>
  );
}

export default Body;
