// void
function withoutReturn():void {
  console.log("Está função não tem return")
}

withoutReturn()

// callback como argumento
function greeting(name: string) {
  return `Olá ${name}`;
}

function preGreeting(f: (name: string) => string, userName:string) {

  console.log("Preparando a função");

  const greet = f(userName)

  console.log(greet);

}

preGreeting(greeting, "Aryman");
preGreeting(greeting, "Bruna");

// generic function
function firstElement<T>(arr: T[]): T {
  return arr[0];
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObjects({name: "Aryman"}, {age: 30, job: "Programmer"});

console.log(newObject);

// constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T

  if(+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }

  return biggest;
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));

// Especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}

console.log(mergeArrays([1,2,3], [5,6]));
console.log(mergeArrays<number | string>([1,2,3], ["Teste", "surf"]));

// Parametros opcionais
function modernGreeting(name: string, greet?: string) {

  if(greet) {
    return `Olá ${greet} ${name}, tudo bem?`
  }

  return `Olá ${name}, Tudo bem?`

}

console.log(modernGreeting("Aryman"));
console.log(modernGreeting("Aryman","Dr."));

//Parametro default
function somaDefault(n: number, m = 10): number {
  return n + m
}

console.log(somaDefault(10));
console.log(somaDefault(15, 12));

function doSomething(x: unknown) {
  if(Array.isArray(x)) {
    console.log(x[0])
  } else if(typeof x === "number") {
    console.log("X é um número")
  }
}

doSomething([1, 2, 3]);
doSomething(5);

function showErrorMessage(msg: string): never {
  throw new Error(msg)
}

//console.log(showErrorMessage("Deu ruim!!!"))

// Rest parameters
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(145, 200, 233, 455, 577));

// destructuring como parametros
function showProductDetails({name, price}:{name: string, price: number}): string {
  return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "Camisa", price: 49.99}

console.log(showProductDetails(shirt));