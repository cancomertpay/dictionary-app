"use client";

//react
import { useEffect, useState } from "react";

//contexts
import { useFontContext } from "@/contexts/font-context";

//framer motion
import { AnimatePresence, motion } from "framer-motion";

//icons
import ArrowDownIcon from "../UI/icons/arrow-down-icon";

function FontSwitcher() {
  const { font, changeFont } = useFontContext();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [font]);

  const fontList = [
    {
      name: "Sans Serif",
      value: "sans-serif",
      font: "font-sans",
    },
    {
      name: "Serif",
      value: "serif",
      font: "font-serif",
    },
    {
      name: "Mono",
      value: "mono",
      font: "font-mono",
    },
  ];

  return (
    <>
      {isDropdownOpen && (
        <div
          id="overlay"
          className="h-screen w-screen z-10 fixed top-0 left-0 touch-none"
          onClick={handleOverlayClick}
        ></div>
      )}
      <div className="flex items-center justify-center gap-2 relative z-20">
        <motion.div
          whileHover={{ scale: 1.1 }}
          animate={{ scale: isDropdownOpen ? 1.2 : 1 }}
          transition={{ duration: 0.3 }}
          className="flex items-center gap-5 cursor-pointer"
          onClick={toggleDropdown}
        >
          <span className="font-bold">
            {fontList.find((item) => item.value === font).name}
          </span>
          <motion.span animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
            <ArrowDownIcon className="pointer-events-none" color="#A445ED" />
          </motion.span>
        </motion.div>
        <AnimatePresence>
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className=" bg-white dark:bg-neutral-jungle-black flex flex-col gap-4 p-5 pr-20 shadow-lg dark:shadow-primary-purple text-neutral-thunder-black rounded-xl absolute top-10 -right-5 z-20 duration-100"
            >
              {fontList.map((item) => (
                <motion.span
                  key={item.value}
                  onClick={() => changeFont(item.value)}
                  className={`text-lg font-bold whitespace-nowrap dark:text-neutral-white cursor-pointer
           ${
             font === item.value
               ? "!text-primary-purple"
               : "text-neutral-thunder-black"
           } ${item.font}`}
                  whileHover={{ scale: 1.1 }}
                >
                  {item.name}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default FontSwitcher;
