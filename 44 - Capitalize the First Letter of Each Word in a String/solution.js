function capitalizeFirstLetter(sentence) {
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeFirstLetter("hello world")); // "Hello World"
