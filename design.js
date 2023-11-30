import rs from "readline-sync"
import chalk from "chalk"


console.log(
  `${chalk.yellowBright.bold.bgWhite("  💥 Dragon⍟")}${chalk.red.bold.bgWhite("Ball Z 🐉🟠")}${chalk.blueBright.bgWhite(" mini battle game 💥  ")}`);

  rs.question("\nPress enter to continue . . .")

  console.clear();
  console.log(`Hello, ${chalk.blue.bold("userName")}! Choose your character to beat ${chalk.red.bold("Frieza:")}:

1. Goku
2. Vegeta
3. Piccolo
4. Gohan
5. Trunks
`);


console.log(`${chalk.yellowBright.bold.bgWhite("  💥 Dragon⍟")}${chalk.red.bold.bgWhite("Ball 𝐙 🐉🟠")}${chalk.blueBright.bgWhite(" mini battle game 💥  \n")}`);

console.log(chalk.bgWhiteBright(" ⍟🐉🟠𝐙🐲"));


console.log(chalk.black.bgWhiteBright("\n🐲🟠 Exiting . . ."));
process.exit();