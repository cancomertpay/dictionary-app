"use client";

import { useThemeContext } from "@/contexts/theme-context";

import MoonIcon from "../UI/icons/moon-icon";

import { motion } from "framer-motion";

function ThemeSwitcher() {
  const { isDarkMode, toggleTheme } = useThemeContext();
  return (
    <motion.p whileHover={{ scale: 1.1 }} className="flex gap-2 items-center ">
      <label className="relative inline-block w-12 h-6 select-none cursor-pointer">
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
    </motion.p>
  );
}

export default ThemeSwitcher;
