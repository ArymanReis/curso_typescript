// Tipos de objetos para função com interface
interface Product {
  name: string
  price: number
  isAvailable: boolean
}

function showProductDetails(product: Product) {

  console.log(`O nome do produto é ${product.name} e seu preço é ${product.price}`);

  if(product.isAvailable) {
    console.log("O produto está disponível");
  }
}

const shirt:Product = {
  name: "Camisa",
  price: 19.99,
  isAvailable: true
}

showProductDetails(shirt);
showProductDetails({name: "Tênis", price: 129.99, isAvailable: false
});

// propriedade opcional em interface
interface User {
  email: string,
  role?: string
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o email: ${user.email}`)

  if(user.role) {
    console.log(`A função do usuário é: ${user.role}`)
  }
}

const u1: User = {email: "arymanreis@gmail.com", role: "Admin"}
const u2:User = {email: "bruna@gmail.com"}

showUserDetails(u1);
showUserDetails(u2);

// readonly
interface Car {
  brand: string
  readonly wheels: number
}

const fusca:Car = {
  brand: "VW",
  wheels: 4
}

console.log(fusca);

//fusca.wheels = 5;

// index signature
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10
}

coords.y = 15

console.log(coords)

//coords.z = "teste";

// extending interfaces
interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superpowers: string[]
}

const aryman: Human = {
  name: "Aryman",
  age: 38
}

console.log(aryman);

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha", "Genki Dama"]
}

console.log(goku);
console.log(goku.superpowers[1]);

// intersection types
interface Character {
  name: string
}

interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Aryman",
  type: "Shotgun",
  caliber: 12
}

console.log(arnold);

console.log(arnold.caliber)

// readonly array
let myArray: ReadonlyArray<string> = ["Maça", "Laranja", "Banana"]

//myArray[3] = "Mamão"

console.log(myArray);

myArray.forEach((item) => {
  console.log("Fruta: "+ item)
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`
})

console.log(myArray);

type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4 ,5];

console.log(myNumberArray);

type nameAndAge = [string, number]

const anotherUser:nameAndAge = ["Aryman", 30]

console.log(anotherUser[0]);

anotherUser[0] = "João"

console.log(anotherUser[0]);

// tuplas com readonly
function showNumbers(numbers: readonly [number, number]) {
  console.log(numbers[0]);
  console.log(numbers[1])
}

showNumbers([1, 2]);

