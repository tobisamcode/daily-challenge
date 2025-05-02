function generateIPAddresses(str) {
  const result = [];

  function backtrack(start, path) {
    if (path.length === 4 && start === str.length) {
      result.push(path.join("."));
      return;
    }

    if (path.length === 4 || start >= str.length) {
      return;
    }

    for (let len = 1; len <= 3; len++) {
      const part = str.slice(start, start + len);
      if (part.length > 1 && part[0] === "0") continue;
      if (+part > 255) continue;
      backtrack(start + len, [...path, part]);
    }
  }

  backtrack(0, []);
  return result;
}

// Test cases

console.log(generateIPAddresses("25525511135"));
