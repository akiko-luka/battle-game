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
  new FightingSkills("Kamehameha (energy wave attack)", 40, 35),
  new FightingSkills("Spirit Bomb (gathering energy from living beings)",30, 20),
  new FightingSkills("Super Saiyan transformations", 50, 40),
]);

const vegeta = new Character("Vegeta", 100, 70, [
  new FightingSkills("Galick Gun (energy wave attack)", 35, 25),
  new FightingSkills("Final Flash (powerful energy blast)", 40, 30),
  new FightingSkills("Big Bang Attack (powerful energy sphere)", 30, 20),
]);

const piccolo = new Character("Piccolo", 100, 65, [
  new FightingSkills("Namekian martial arts", 35, 25),
  new FightingSkills("Special Beam Cannon (piercing energy beam)", 30, 25),
  new FightingSkills("Hellzone Grenade (energy sphere attack)", 35, 20),
]);

const gohan = new Character("Gohan", 100, 75, [
  new FightingSkills("Masenko (energy wave attack)", 35, 20),
  new FightingSkills("Kamehameha", 35, 30),
  new FightingSkills("Mystic/Ultimate Gohan form", 40, 35),
]);

const trunks = new Character("Trunks", 100, 75, [
  new FightingSkills("Swordsmanship", 30, 20),
  new FightingSkills("Burning Attack (energy wave attack)", 25, 20),
  new FightingSkills("Super Saiyan transformations", 40, 30),
]);

// default opponent -> frieza info
const frieza = new Character("Frieza", 100, 75, [
  new FightingSkills("Intense hand-to-hand combat skills", 35, 25),
  new FightingSkills("Death Beam (piercing energy beam)", 35, 25),
  new FightingSkills("Supernova (planet-destroying attack)", 40, 30),
]);

// character choosing
const characters = [goku, vegeta, piccolo, gohan, trunks];
function chooseCharacter() {
  characters.forEach((character, index) => {
    console.log(`${index + 1}. ${character.name}`);
  });
}


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
  console.log(`Hello, ${chalk.blue.bold(userName)}! Choose your character to defeat ${chalk.red.bold("Frieza:")}:\n`);
 
  
  chooseCharacter()
  
  // choose character input
  const characterIndex = Number(rs.question("\nSelect your character: "));
  const selectedCharacter = characters[characterIndex];

  startGame(userName, selectedCharacter);
}

function startGame(username) {
  console.log(`Choose your attack, ${chalk.blue.bold(username)}!`);
}
