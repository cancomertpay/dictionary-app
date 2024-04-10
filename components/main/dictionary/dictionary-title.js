import PhoneticAudioPlayer from "./dictionary-phonetic-player";

function DictionaryTitleGroup({ phonetic, phonetics, word }) {
  return (
    <div className="my-5 flex items-center justify-between">
      <div>
        <h1 className="lowercase font-bold text-4xl   mb-2">{word}</h1>
        <p className="text-primary-purple">{phonetic}</p>
      </div>

      <PhoneticAudioPlayer phonetics={phonetics} />
    </div>
  );
}

export default DictionaryTitleGroup;
