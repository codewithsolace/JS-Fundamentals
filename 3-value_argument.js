const args = process.argv.slice(2); // Isolates user arguments

if (args[0] === undefined) {
  console.log("No argument");
} else {
  console.log(args[0]); // Always prints ONLY the first argument
}