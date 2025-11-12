// Create a custom module to count the number of words in a given text.

export const wordCount = (text) => {
  if (!text || text.trim() === "") return 0;
  return text.trim().split(/\s+/).length;
};

console.log(wordCount(" "));
