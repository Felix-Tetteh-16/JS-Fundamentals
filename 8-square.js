// This script reads the first argument (size) and prints a right-angled triangle
// of 'X' characters, where the size determines the height.

// 1. Get the first command-line argument.
const size_arg = process.argv[2];

// 2. Convert the argument to an integer.
const size = parseInt(size_arg);

// Check if the argument is invalid (missing, non-numeric, or negative).
if (isNaN(size) || size <= 0) {
  console.log("Missing size");
} else {
  // Outer loop controls the rows (height of the triangle).
  // The loop runs 'size' times.
  for (let i = 1; i <= size; i++) {
    // Inner loop builds the row string.
    // It runs 'i' times, meaning the number of 'X's grows with each row (1, 2, 3, ... up to size).
    let row = "";
    for (let j = 0; j < i; j++) {
      row += "X";
    }
    // Print the completed row.
    console.log(row);
  }
}
