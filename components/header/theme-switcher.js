"use client";

import { useThemeContext } from "@/contexts/theme-context";

import Image from "next/image";
import moon_icon from "/public/images/icon-moon.svg";
import MoonIcon from "../UI/icons/moon-icon";

function ThemeSwitcher() {
  const { isDarkMode, toggleTheme } = useThemeContext();
  return (
    <p className="flex gap-2 items-center">
      <label className="relative inline-block w-12 h-6 select-none">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={toggleTheme}
          className="absolute w-0 h-0 opacity-0 peer"
        />
        <span className="bg-neutral-grey peer-checked:bg-primary-purple block w-full h-full rounded-full absolute top-0 left-0 transition-all duration-200"></span>
        <span className="bg-white block w-4 h-4 rounded-full absolute top-1 left-1 transition-all duration-200 peer-checked:left-7"></span>
      </label>
      <MoonIcon color={isDarkMode ? "#A445ED" : "#838383"} />
    </p>
  );
}

export default ThemeSwitcher;
