// This script prints "C is fun" x times, where x is the first argument.

// 1. Get the first argument and convert it to an integer.
const x_arg = process.argv[2];
const x = parseInt(x_arg);

// 2. Check for the error condition: argument missing or not a convertible integer.
// isNaN(x) handles both cases: parseInt(undefined) returns NaN, and
// parseInt("Hello") returns NaN. We also ensure x is non-negative since
// printing a message a negative number of times is illogical for this context.
if (isNaN(x) || x < 0) {
  // This is the first console.log
  console.log("Missing number of occurrences");
} else {
  // 3. Use a loop to print the message x times.
  // We use 'let' for the loop counter 'i' as it must be reassigned,
  // and 'const' for the counter is forbidden.
  for (let i = 0; i < x; i++) {
    // This is the second console.log
    console.log("C is fun");
  }
}
