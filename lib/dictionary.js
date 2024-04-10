// Dictionary API Calls

import { notFound } from "next/navigation";

export const fetchWord = async (searchTerm) => {
  const response = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
  );

  if (response.status === 404) {
    notFound();
  }

  return response.json();
};
