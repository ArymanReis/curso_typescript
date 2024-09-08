let numbers: number[] = [1, 2, 3];

numbers.push(8);


console.log(numbers[3]);

const names: string[] = ["Aryman", "Bruna", "Abrãao"];

console.log(names);

// Outra sintaxe array
const nums: Array<number> = [100, 200];

nums.push(300);

console.log(nums);
console.log(nums[0]);

// nay
const arr1: any = [1, "teste", true, [], {nome: "Aryman"} ];
console.log(arr1);

arr1.push([1, 2, 3]);

console.log(arr1);

//Parâmentros tipados
function soma(a: number, b:number) {
  console.log(a + b)
}
soma(4, 5);

//Função tipados

function greeting(name: string): string {
  return `Olá ${name}`;
}

console.log(greeting("Aryman"));

//Função anônimas
//setTimeout(function() {

  //const sallary: number = 1000;

  //console.log(parseFloat(sallary));
  //console.log(sallary);

//}, 2000);

// Tipos de objetos
function passCoordinates(coord: {x: number, y: number}) {
  console.log("X coordinates: " + coord.x)
  console.log("Y coordinates: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCoordinates(objCoord);

// Propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log("A " + a);
  console.log("B " + b);
  if(c) {
    console.log("c: " + c);
  }
}

showNumbers(1, 2, 3);
showNumbers(4, 5);

// Validação de props opcional
function advancedGreeting(firsName: string, lastName?: string) {

  if(lastName !== undefined) {
    return `Olá, ${firsName} ${lastName}, tudo bem?`
  }

  return `Olá, ${firsName}, Tudo bem?`

}

console.log(advancedGreeting("Aryman", "Reis"));
console.log(advancedGreeting("Aryman"));

// union type
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`)
};

showBalance(100);
showBalance("500");

const arr2: Array<number | string | boolean> = [1, "teste", true];

console.log(arr2);

// Avançando em union types
function showUserRole(role: boolean | string) {
  if(typeof role === "boolean") {
    return "Usuário não aprovado!"
  }

  return `A função do usuário é: ${role}`
}

console.log(showUserRole(false));
console.log(showUserRole("Adimin"));

// type alias

type ID = string | number;

function showId(id: ID) {
  console.log(`O ID é: ${id}`)
}

showId(1);
showId("100");

// interface
interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point) {

  console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`)

}

const coordObj:Point = {
  x: 10,
  y: 15,
  z: 20
}

showCoords(coordObj);

// interface x type alias
interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = {
  name: "Aryman", age: 30
}

console.log(somePerson);

type PersonType = {
  name: string
}
//type PersonType = {
  //age: number
//}

// Literal types
let test: "Testando";

test = "Testando";

console.log(test);

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é: ${direction}`)
}

showDirection("left");
//showDirection("top");

//non null assertion operators
const p = document.getElementById("some-p");
console.log(p!.innerHTML);

// bigint
let n: bigint

n = 1000n;

console.log(n);

// symbolA
let symbolA:symbol = Symbol("a");
let symbolB = Symbol("a");

console.log(symbolA == symbolB);
console.log(symbolA === symbolB);








