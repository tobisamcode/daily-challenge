function toCamelCase(str) {
  return str
    .split("_")
    .map((word, index) => {
      return index === 0
        ? word.toLowerCase()
        : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

// Test Cases
console.log(toCamelCase("snake_case")); // SnakeCase
console.log(toCamelCase("snake_case_123")); // SnakeCase123
