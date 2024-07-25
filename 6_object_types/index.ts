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


