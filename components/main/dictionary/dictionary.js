import DictionaryMeaningLayout from "./dictionary-meaning-layout";
import DictionaryTitleGroup from "./dictionary-title";
import DictionarySourcesLayout from "./dictionary-sources-layout";

function Dictionary({ result, lastIndex }) {
  const { word, phonetic, phonetics, meanings, sourceUrls } = result;
  return (
    <>
      {/* title section */}
      <DictionaryTitleGroup
        word={word}
        phonetic={phonetic}
        phonetics={phonetics}
      />

      {/* meanings section */}
      {meanings.length > 0 &&
        meanings.map((meaning, index) => (
          <DictionaryMeaningLayout
            key={index}
            meaning={meaning.partOfSpeech}
            definitions={meaning.definitions}
            synonyms={meaning.synonyms}
          />
        ))}

      {/* divider */}
      <div className="w-full border border-neutral-light-grey mt-6" />

      {/* source section */}
      {sourceUrls.length > 0 && (
        <DictionarySourcesLayout sourceUrls={sourceUrls} />
      )}

      {/* divider */}
      {!lastIndex && (
        <div className="w-full border border-neutral-light-grey mb-6" />
      )}
    </>
  );
}

export default Dictionary;
