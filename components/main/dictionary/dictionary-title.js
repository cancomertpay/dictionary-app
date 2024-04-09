"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function DictionaryTitleGroup({ phonetic, phonetics, word }) {
  const phoneticAudio = phonetics?.find((p) => p.audio)?.audio;
  const hasAudio = Boolean(phoneticAudio);
  const audio = new Audio(hasAudio ? phoneticAudio : null);

  const [audioState, setAudioState] = useState(audio);

  const playAudio = () => {
    audioState.play();
  };

  useEffect(() => {
    setAudioState(audio);
  }, [phonetic]);

  return (
    <div className="my-5 flex items-center justify-between">
      <div>
        <h1 className="lowercase font-bold text-4xl   mb-2">{word}</h1>
        <p className="text-primary-purple">{phonetic}</p>
      </div>
      <motion.button
        whileTap={{ scale: hasAudio ? 0.95 : 1 }}
        onClick={playAudio}
        whileHover={{
          scale: hasAudio ? 1.08 : 1,
        }}
        className="disabled:opacity-15 p-2 disabled:cursor-not-allowed"
        disabled={!hasAudio}
      >
        <Image
          className={` border border-transparent ${
            hasAudio
              ? "hover:border-primary-purple cursor-pointer"
              : "hover:border-transparent disabled:cursor-not-allowed"
          } rounded-full transition-all duration-200 ease-in-out`}
          src="images/icon-play.svg"
          alt="Dictionary pronunciation player icon"
          width={48}
          height={48}
        />
      </motion.button>
    </div>
  );
}

export default DictionaryTitleGroup;
