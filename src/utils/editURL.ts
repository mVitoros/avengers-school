export const encodeURL = (url: string) => {
  return url.replace(" ", "-").toLowerCase();
};

export const decodeURL = (url: string) => {
  if (!url.includes("-")) return url.charAt(0).toUpperCase() + url.slice(1);

  const parts = url.split("-");

  const capitalizedWords = parts.map((part) => {
    const firstLetter = part.charAt(0).toUpperCase();
    const restOfWord = part.slice(1);
    return firstLetter + restOfWord;
  });

  return capitalizedWords.join(" ");
};
