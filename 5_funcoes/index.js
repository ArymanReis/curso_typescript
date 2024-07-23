"use strict";
// void
function withoutReturn() {
    console.log("Está função não tem return");
}
withoutReturn();
// callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Aryman");
preGreeting(greeting, "Bruna");
