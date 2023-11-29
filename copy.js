import rs from "readline-sync";
import chalk from "chalk";

// class for characters
class Character {
  constructor(name, hp, attacks) {
    this.name = name;
    this.hp = hp; // hp -> hit points/health
    this.attacks = attacks;
  }
  // character health
  isAlive() {
    return this.hp > 0;
  }
}

// class for skills
class FightingSkills {
  constructor(skill, damage, ap) {
    this.skill = skill;
    this.damage = damage;
    this.ap = ap; // ap -> attack points/magic
  }
}

// character info
                                // hp
const goku = new Character("Goku", 100, [
                                // hp // ap
  new FightingSkills("Kamehameha", 40, 35),
  new FightingSkills("Rapid Kick Rush", 30, 20),
  new FightingSkills("Super Kamehameha", 50, 40),
]);

const vegeta = new Character("Vegeta", 100, [
  new FightingSkills("Super Dash Kick", 25, 15),
  new FightingSkills("Big Bang Attack", 30, 20),
  new FightingSkills("Final Flash", 40, 30),
]);

const piccolo = new Character("Piccolo", 100, [
  new FightingSkills("Demon Shocker", 25, 15),
  new FightingSkills("Special Beam Cannon", 30, 25),
  new FightingSkills("Hellzone Grenade", 40, 30),
]);

const gohan = new Character("Gohan", 100, [
  new FightingSkills("Ultimate High Kick", 30, 20),
  new FightingSkills("Masenkou", 35, 30),
  new FightingSkills("Kamehameha", 40, 35),
]);

const trunks = new Character("Trunks", 100, [
  new FightingSkills("Shining Slash", 20, 10),
  new FightingSkills("Burning Attack", 35, 25),
  new FightingSkills("Heat Dome Attack", 40, 30),
]);

// default opponent -> frieza info
const frieza = new Character("Frieza", 100, [
  new FightingSkills("Death Ball", 35, 25),
  new FightingSkills("Warp Smash", 25, 15),
  new FightingSkills("Nova Strike", 40, 30),
]);

// character choosing
const characters = [goku, vegeta, piccolo, gohan, trunks];
function chooseCharacter() {
  characters.forEach((character, index) => {
    console.log(`${index + 1}. ${character.name}`);
  });
  console.log("\n0. Exit");
}

// select attack
function attackOptions(character) {
  // console.clear();
  console.log(`Choose your attack, ${character.name}:`);
  character.attacks.forEach((attack, index) => {
    console.log(`${index + 1}. ${attack.skill}`);
  });
}

// select character then start game loop
function startGame(selectedCharacter) {
  // console.clear();
  console.log(`You chosed ${selectedCharacter.name}!`);
  // console.log(selectedCharacter);

  // start game
  while (selectedCharacter.hp > 0 && frieza.hp > 0) {
    attackOptions(selectedCharacter);
    // input attack
    const chooseAttack = Number(rs.question("Choose your attack:"));
    const selectedAttack = selectedCharacter.attacks[chooseAttack - 1];
    
    // generate frieza's attack (random)
    const friezaAttack = frieza.attacks[Math.floor(Math.random() * frieza.attacks.length)];
    
    // health status baase on the chosen attack
    frieza.hp -= selectedAttack.damage;
    selectedCharacter.hp -= friezaAttack.damage;
    
  }
    // print game result

  // play again or end game
  const newGame = rs.question("Do you want to play again? (y | n): ").toLowerCase();
  switch (newGame) {
    case "y":
      break;
    case "n":
      process.exit();
  }
}

// Interaction
while (true) {
  console.clear();
  console.log(`${chalk.yellowBright.bold.bgWhite("  💥 Dragon")}${chalk.red.bold.bgWhite("Ball Z")}${chalk.blueBright.bgWhite(" mini battle game 💥  ")}`);

  // to start
  rs.question("\n\n\n\n\nPress enter to start . . .");

  // enter username
  console.clear();
  let userName = rs.question(
    chalk.white("\nEnter your username:\n") + chalk.blue.bold("> "));
  console.clear();
  console.log(`Hello, ${chalk.blue.bold(userName)}! Choose your character to defeat ${chalk.red.bold("Frieza")}:\n`);

  chooseCharacter();

  // choose character input
  const characterInput = Number(rs.question("\nSelect your character (enter the number of the chosen character): "));
  const selectedCharacter = characters[characterInput - 1];
  // switch (characters) {
  //   case "0":
  //     console.log("Exiting . . .");
  //     process.exit();
  //   default:
  //     console.log("Invalid option!");
  // }
  // rs.question("Press enter to continue . . .")

  startGame(selectedCharacter);
}
