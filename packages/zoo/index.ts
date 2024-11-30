import { getRandomAnimal } from "@nxdemo/animals";
import { getRandomName } from "@nxdemo/names";

const name = getRandomName();
const animal = getRandomAnimal();

console.log(`${name} the ${animal.name} says ${animal.sound}!`);
