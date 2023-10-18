const countWords = (sentence) => {

    const trimmedSentence = sentence.trim();
  
    const words = trimmedSentence.split(" ");

    const filteredWords = words.filter(word => word !== "");
  
    return filteredWords.length;
  };
  
  const sentence = "  Hello   World!  ";
  const wordCount = countWords(sentence);
  
  console.log(wordCount);