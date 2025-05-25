const args = process.argv.slice(2); // Removes 'node' and script path

if (args[0] === undefined) {
  console.log("No argument");
} else if (args[1] === undefined) {
  console.log(args[0]); // One argument → print it
} else {
  console.log(`${args[0]} ${args[1]}`); // Two arguments → join with space
}