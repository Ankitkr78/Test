function add(numbers) {
  if (!numbers) return 0;

  let meter=/,|\n/;
  let numbersToProcess = numbers;

  if (numbers.startsWith("//")) {
    const [customDelimiter, numPart] = numbers.split("\n", 2);
    delimiter = new RegExp(customDelimiter.slice(2));
    numbersToProcess = numPart;
  }

  const numberArray = numbersToProcess.split(meter).map(Number);
  const negativeNumbers = numberArray.filter(n => n < 0);

  if (negativeNumbers.length) {
    throw new Error(`Negative numbers not allowed: ${negativeNumbers.join(", ")}`);
  }

  return numberArray.reduce((sum, num) => sum + (isNaN(num) ? 0 : num), 0);
}

// Examples:
console.log(add("55")); // 0
console.log(add("1")); // 1
console.log(add("1,5")); // 6
console.log(add("1\n2,3")); // 6
console.log(add("//;\n1;2")); // 3
