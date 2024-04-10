"use client";

import Link from "next/link";

function DictionaryMeaningLayout({ meaning, definitions, synonyms }) {
  const modifyTerm = (text) => {
    const modifiedText = text?.replace(/\s+/g, "-");
    return modifiedText;
  };
  return (
    <div>
      <div className="flex items-center gap-5 w-full my-6">
        <h2 className="italic lowercase font-bold text-lg whitespace-nowrap">
          {meaning}
        </h2>
        <div className="w-full border border-neutral-light-grey" />
      </div>
      {definitions.length > 0 && (
        <div>
          <h3 className="text-neutral-grey">Meaning</h3>
          <ul className="flex flex-col gap-5 list-disc marker:text-primary-purple p-5">
            {definitions.map((definition, index) => (
              <li key={index}>
                <p>{definition.definition}</p>
                {definition.example && (
                  <p className="text-neutral-grey mt-2">
                    “{definition.example}”
                  </p>
                )}
              </li>
            ))}
          </ul>
          {synonyms.length > 0 && (
            <div className="flex gap-5">
              <h3 className="text-neutral-grey">Synonyms</h3>
              <ul className="flex gap-3 flex-wrap">
                {synonyms.map((synonyms, index) => (
                  <li
                    key={index}
                    className="text-primary-purple font-bold cursor-pointer hover:underline hover:underline-offset-4  hover:text-primary-purple/50 transition-all duration-200"
                  >
                    <Link href={`/${modifyTerm(synonyms)}`}>{synonyms}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default DictionaryMeaningLayout;
