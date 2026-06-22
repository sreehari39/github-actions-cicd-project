const message = "CI Test Passed!";
if (message === "CI Test Passed!") {
  console.log("CI Test Passed!");
} else {
  console.log("CI Test Failed!");
  process.exit(1); // Exit with a non-zero status code to indicate failure
}