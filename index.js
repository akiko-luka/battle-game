import rs from "readline-sync";
import chalk from "chalk";

// class for characters
class Character {
  constructor(name, hp, attacks) {
    this.name = name;
    this.hp = hp; // hp -> hit points/health
    this.attacks = attacks;
  }
}

// class for skills
class FightingSkills {
  constructor(skills, damage, ap) {
    this.skills = skills;
    this.damage = damage;
    this.ap = ap; // ap -> attack points/magic
  }

  // character health
  isAlive() {
    return this.health > 0;
  }
}

// character info
const goku = new Character("Goku", 100, 80, [
  new FightingSkills("Kamehameha", 40, 35),
  new FightingSkills("Rapid Kick Rush",30, 20),
  new FightingSkills("Super Kamehameha", 50, 40),
]);

const vegeta = new Character("Vegeta", 100, 70, [
  new FightingSkills("Super Dash Kick", 25, 15),
  new FightingSkills("Big Bang Attack", 30, 20),
  new FightingSkills("Final Flash", 40, 30),
]);

const piccolo = new Character("Piccolo", 100, 65, [
  new FightingSkills("Demon Shocker", 25, 15),
  new FightingSkills("Special Beam Cannon", 30, 25),
  new FightingSkills("Hellzone Grenade", 40, 30),
]);

const gohan = new Character("Gohan", 100, 75, [
  new FightingSkills("Ultimate High Kick", 30, 20),
  new FightingSkills("Masenkou", 35, 30),
  new FightingSkills("Kamehameha", 40, 35),
]);

const trunks = new Character("Trunks", 100, 75, [
  new FightingSkills("Shining Slash", 20, 10),
  new FightingSkills("Burning Attack", 35, 25),
  new FightingSkills("Heat Dome Attack", 40, 30),
]);

// default opponent -> frieza info
const frieza = new Character("Frieza", 100, 75, [
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
}

function startGame(selectedCharacter) {
  console.log(`You chosed ${selectedCharacter.name}!`);
}

// select attack
function attackOptions(character) {
  console.clear()
  console.log(`Choose an attack, ${character.name}:`);
  character.attacks.forEach((attack, index) => {
    console.log(`${index + 1}. ${attack.skills}`);
  })
}

// start game

// input attack

// generate frieza's attack (random)

// health status baase on the chosen attack

// print game result

// new game or end the game here



// Interaction
while (true) {
  console.clear();
  console.log(`${chalk.yellowBright.bold.bgWhite("  💥 Dragon")}${chalk.red.bold.bgWhite("Ball Z")}${chalk.blueBright.bgWhite(" mini battle game 💥  ")}`);

  rs.question("\n\n\n\n\nPress enter to start . . .");

  // enter username
  console.clear();
  let userName = rs.question(
    chalk.white("\nEnter your username:\n") + chalk.blue.bold("> ")
  );
  console.clear();
  console.log(`Hello, ${chalk.blue.bold(userName)}! Choose your character to defeat ${chalk.red.bold("Frieza")}:\n`);
 
  
  chooseCharacter()
  
  // choose character input
  const characterIndex = Number(rs.question("\nSelect your character (enter the number of the chosen character): "));
  const selectedCharacter = characters[characterIndex];

  startGame(userName, selectedCharacter);
}