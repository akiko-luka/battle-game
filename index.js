import rs from "readline-sync";
import chalk from "chalk";

// class for characters
class Character {
  constructor(name, hp, attacks) {
    this.name = name;
    this.hp = hp; // hp -> health/hit points
    this.attacks = attacks;
  }
  // Method check if the character is alive
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
const goku = new Character(chalk.yellow.bold("Goku"), 100, [
                                // hp // ap
  new FightingSkills("Kamehameha", 40, 35),
  new FightingSkills("Rapid Kick Rush", 30, 20),
  new FightingSkills("Super Kamehameha", 50, 40),
]);

const vegeta = new Character(chalk.blue.bold("Vegeta"), 100, [
  new FightingSkills("Super Dash Kick", 25, 15),
  new FightingSkills("Big Bang Attack", 30, 20),
  new FightingSkills("Final Flash", 40, 30),
]);

const piccolo = new Character(chalk.green.bold("Piccolo"), 100, [
  new FightingSkills("Demon Shocker", 25, 15),
  new FightingSkills("Special Beam Cannon", 30, 25),
  new FightingSkills("Hellzone Grenade", 40, 30),
]);

const gohan = new Character(chalk.red.bold("Gohan"), 100, [
  new FightingSkills("Ultimate High Kick", 30, 20),
  new FightingSkills("Masenkou", 35, 30),
  new FightingSkills("Kamehameha", 40, 35),
]);

const trunks = new Character(chalk.cyan.bold("Trunks"), 100, [
  new FightingSkills("Shining Slash", 20, 10),
  new FightingSkills("Burning Attack", 35, 25),
  new FightingSkills("Heat Dome Attack", 40, 30),
]);

// default opponent -> frieza info
const frieza = new Character(chalk.magenta.bold("Frieza"), 100, [
  new FightingSkills("Death Ball", 35, 25),
  new FightingSkills("Warp Smash", 25, 15),
  new FightingSkills("Nova Strike", 40, 30),
]);

// character choosing
const characters = [goku, vegeta, piccolo, gohan, trunks];
function chooseCharacter() {
  characters.forEach((character, index) => {
    console.log(`${index + 1}. ${chalk.bgWhite(character.name)}`);
  });
  console.log("\n0. Exit\n");
}

// select attack
function attackOptions(character) {
  // console.clear();
  console.log(`Choose your attack for ${character.name}:\n`);
  character.attacks.forEach((attack, index) => {
    console.log(`${index + 1}. ${attack.skill} - Damage: ${attack.damage} | AP: ${attack.ap}`);
  });
}

// select character then start game loop
function startGame(selectedCharacter) {
  // console.clear();
  console.log(`
You chosed ${selectedCharacter.name}!
`);

  // start game
  while (selectedCharacter.hp > 0 && frieza.hp > 0) {
    attackOptions(selectedCharacter);
    // input attack
    let chooseAttack = Number(rs.question(chalk.white("\nEnter your attack:\n") + chalk.blue.bold(">>> "))) - 1;
    if (chooseAttack < 0 ||chooseAttack >= selectedCharacter.attacks.length) {
      console.log("❗Invalid input❗\n");
      continue;
    }
    
    const selectedAttack = selectedCharacter.attacks[chooseAttack];
    
    // generate frieza's attack (random)
    const friezaAttack = frieza.attacks[Math.floor(Math.random() * frieza.attacks.length)];
    
    // health status base on the chosen attack
    frieza.hp = Math.max(frieza.hp - selectedAttack.damage, 0);
    selectedCharacter.hp = Math.max(selectedCharacter.hp - friezaAttack.damage, 0);

    // ap
    // frieza.ap -= selectedAttack.ap;
    // selectedCharacter.ap -= friezaAttack.ap;
    
    // print game attack process
    // console.clear()
    console.log(`
${selectedCharacter.name} attacks ${frieza.name} with ${selectedAttack.skill}, inflicting ${selectedAttack.damage} damage and consuming ${selectedAttack.ap} AP!`);
    console.log(`${frieza.name} counters back with ${friezaAttack.skill}, inflicting ${friezaAttack.damage} damage and consuming ${friezaAttack.ap} AP!`);

    // health status after the attack
    console.log(`
${selectedCharacter.name}'s HP: ${selectedCharacter.hp} | ${frieza.name}'s HP: ${frieza.hp}`);
}

  // print game result
  if (selectedCharacter.hp <= 0) {
    console.log(chalk.red.bgBlack.bold("\n Game over! ") + frieza.name + (" defeated you! ❌ "));
    // console.log(`Game over! ${frieza.name} defeated you!`);
  } else {
    console.log(chalk.blueBright.bgBlack.bold("\n You won! 🔥🎉 "));
  }

  // play again or end game
  const newGame = rs.question("\nDo you want to play again? (y | n): ").toLowerCase();
  switch (newGame) {
    case "y":
      selectedCharacter.hp = 100;
      frieza.hp = 100;
      break;
    case "n":
      console.log(chalk.black.bgWhiteBright("\n 🐲🟠 Exiting . . . \n"));
      process.exit();
  }
}

// Interaction/main game loop
while (true) {
  console.clear();
  console.log(`${chalk.yellowBright.bold.bgWhite("  💥 Dragon⍟")}${chalk.red.bold.bgWhite("Ball 𝐙")}${chalk.blueBright.bgWhite(" mini battle game 💥  ")}`);

  // to start
  rs.question("\n\n\n\n\nPress enter to start . . .");

  // enter username
  console.clear();
  let userName = rs.question(chalk.white("\nEnter your username:\n") + chalk.blue.bold(">>> "));
  console.clear();
  console.log(`Hello, ${chalk.blue.bold(userName)}! Choose your character to defeat ${frieza.name}!\n${chalk.italic("► NOTE: Each character's health is 100 at the start of the game. ◄\n")}`);

  chooseCharacter();

  // choose character input
  let characterInput = Number(rs.question(`Enter the number of the chosen character: ${chalk.blue.bold(" >>> ")}`));
  if (characterInput === 0) {
    console.log(chalk.black.bgWhiteBright("\n 🐲🟠 Exiting . . . "));
    process.exit();
  } else if (characterInput < 1 || characterInput >= characters.length){
    console.log("❗Invalid input❗");
    rs.question("Press enter to restart . . .")
  } else {
    const selectedCharacter = characters[characterInput - 1];
  
    startGame(selectedCharacter);
  }

}
