import Dictionary from "@/components/main/dictionary/dictionary";
import { fetchWord } from "@/lib/dictionary";

async function SearchResult({ params }) {
  if (!params.searchTerm) return null;

  const reverseModifyTerm = (text) => {
    return text?.replace(/-/g, " ");
  };
  const data = await fetchWord(reverseModifyTerm(params.searchTerm));
  return (
    <div className="pb-14 overflow-hidden">
      {data?.map(
        (word, index) =>
          index === 0 && (
            <Dictionary
              key={index}
              result={word}
              lastIndex={data.length === index + 1}
            />
          )
      )}
    </div>
  );
}

export default SearchResult;
