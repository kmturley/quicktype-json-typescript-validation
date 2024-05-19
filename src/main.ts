import { Convert } from "./convert";
import { Person } from "./types/Person";

const personA = '{"name":"Bob","nickname":"Bobby","luckyNumber":2}';
const personB: Person = {
  name: "Bob",
  nickname: "Bobby",
  luckyNumber: 2
};

console.log(Convert.toPerson(personA));
console.log(Convert.personToJson(personB));
