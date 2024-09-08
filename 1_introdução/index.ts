const firstName: string = "Aryman Reis";
//const anotherName: number = 1;
//const x: boolean = true;

function greeting(name: string) {
  console.log("Olá " + name)
}

greeting(firstName);

// Desafio 1

const a: number = 5;
const b: number = 10;

function sum() {
  console.log( a + b );
}

sum();

function sumNew(a: number, b:number) {
  return a + b;
}

console.log(sumNew(2, 2));