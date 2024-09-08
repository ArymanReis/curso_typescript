// importação de arquivos
import importGreet from "./greet.js";

importGreet();

// import variavél
import { x } from "./variable.js";

console.log(x);

// multiplas importações
import { a, b, myFunction } from "./multiple.js";

console.log(a);
console.log(b)
myFunction();

// alias
import { someName as name } from "./changename.js";

console.log(name);

// import all
import * as myNumbers from "./numbers.js";

console.log(myNumbers);

const nX = myNumbers.n1;

console.log(nX);

// importando tipos
import { Human } from "./mytype.js";

class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new User("João", 25);

console.log(joao);
