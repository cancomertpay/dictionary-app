"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import variants from "@/variants/variants";

function SearchField() {
  const router = useRouter();
  const params = useParams();

  const [terms, setTerms] = useState(params.searchTerm);
  const [inputError, setInputError] = useState(false);
  const bounce = useRef();

  const modifyTerm = (text) => {
    const modifiedText = text?.replace(/\s+/g, "-");
    return modifiedText;
  };

  const reverseModifyTerm = (text) => {
    return text?.replace(/-/g, " ");
  };

  const isLocalString = (text) => {
    return !text.match(/[^\w\s]/g);
  };

  const handleChange = (e) => {
    setInputError(false);

    const value = e.target.value;
    const isValid = isLocalString(value);
    if (isValid) {
      setTerms(value);
    }
  };

  const handleSubmit = () => {
    if (terms?.trim() === "") {
      setInputError(true);
      return;
    }
    router.push("/" + modifyTerm(terms?.trim()));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  useEffect(() => {
    if (bounce.current) {
      clearTimeout(bounce.current);
    }

    bounce.current = setTimeout(() => {
      bounce.current = null;
      handleSubmit();
    }, 800);
  }, [terms]);

  useEffect(() => {
    setTerms(reverseModifyTerm(params.searchTerm));
  }, [params.searchTerm]);

  return (
    <motion.div
      variants={variants.fadeIn("right", 0.2, 0.2)}
      initial="hidden"
      animate="visible"
      className="relative mt-2"
    >
      <label htmlFor="search-input" className="hidden">Search</label>
      <input
        id="search-input"
        type="text"
        placeholder="Dictionary"
        className={`w-full font-bold border border-transparent focus:border-primary-purple bg-neutral-white-smoke dark:bg-neutral-jungle-black outline-none transition-all duration-200 rounded-2xl py-3 px-5 ${
          inputError && "!border-primary-red"
        }`}
        value={terms}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <div className="text-primary-red transition-all duration-200 h-5">
        {inputError && "Whoops, can't be empty…"}
      </div>
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1 }}
        onClick={handleSubmit}
        className="absolute top-2 right-3 p-2 bg-neutral-white-smoke transition-colors duration-200 dark:bg-neutral-jungle-black cursor-pointer"
      >
        <Image
          src="/images/icon-search.svg"
          alt="Search icon"
          width={20}
          height={20}
          priority
        />
      </motion.div>
    </motion.div>
  );
}

export default SearchField;
