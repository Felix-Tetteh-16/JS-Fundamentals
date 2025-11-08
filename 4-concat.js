if (process.argv.length === 4) {
  const firstArgument = process.argv[2];
  const secondArgument = process.argv[3];

  console.log(`${firstArgument} is ${secondArgument}`);
} else {
  console.log("Error: Please provide exactly two arguments.");
  console.log("Usage: node statement.js <argument1> <argument2>");
}
