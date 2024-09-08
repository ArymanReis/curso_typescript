"use strict";
let numbers = [1, 2, 3];
numbers.push(8);
console.log(numbers[3]);
const names = ["Aryman", "Bruna", "Abrãao"];
console.log(names);
// Outra sintaxe array
const nums = [100, 200];
nums.push(300);
console.log(nums);
console.log(nums[0]);
// nay
const arr1 = [1, "teste", true, [], { nome: "Aryman" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
//Parâmentros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//Função tipados
function greeting(name) {
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
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// Propriedades opcionais
function showNumbers(a, b, c) {
    console.log("A " + a);
    console.log("B " + b);
    if (c) {
        console.log("c: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// Validação de props opcional
function advancedGreeting(firsName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firsName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firsName}, Tudo bem?`;
}
console.log(advancedGreeting("Aryman", "Reis"));
console.log(advancedGreeting("Aryman"));
// union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
;
showBalance(100);
showBalance("500");
const arr2 = [1, "teste", true];
console.log(arr2);
// Avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Adimin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
showId(1);
showId("100");
function showCoords(obj) {
    console.log(`x: ${obj.x} y: ${obj.y} z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
const somePerson = {
    name: "Aryman", age: 30
};
console.log(somePerson);
//type PersonType = {
//age: number
//}
// Literal types
let test;
test = "Testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
//showDirection("top");
//non null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerHTML);
// bigint
let n;
n = 1000n;
console.log(n);
// symbolA
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
