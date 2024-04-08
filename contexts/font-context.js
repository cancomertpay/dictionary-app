"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FontContext = createContext();

export const useFontContext = () => {
  const context = useContext(FontContext);

  if (!context) {
    throw new Error("useFontContext must be used within a FontProvider");
  }

  return context;
};

export default function FontProvider({ children }) {
  const [font, setFont] = useState("sans-serif");

  useEffect(() => {
    // Check user's preference
    const storedFont = localStorage.getItem("font");
    if (storedFont) {
      setFont(storedFont);
    } else {
      localStorage.setItem("font", "sans-serif");
    }
  }, []);

  const changeFont = (newFont) => {
    // Check if the new font is the same as the current font
    if (newFont === font) return;

    // set the new font
    setFont(newFont);
    localStorage.setItem("font", newFont);
  };

  const values = {
    font,
    changeFont,
  };

  return <FontContext.Provider value={values}>{children}</FontContext.Provider>;
}
