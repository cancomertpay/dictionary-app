"use client";
import Image from "next/image";

import { motion } from "framer-motion";

function PhoneticAudioPlayer({ phonetics }) {
  const phoneticAudio = phonetics?.find((p) => p.audio)?.audio;
  const hasAudio = Boolean(phoneticAudio);

  const playAudio = () => {
    if (!hasAudio) return;
    new Audio(phoneticAudio).play();
  };
  return (
    <>
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
    </>
  );
}

export default PhoneticAudioPlayer;
