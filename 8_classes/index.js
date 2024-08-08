"use strict";
// campos em classes
class User {
}
const matheus = new User();
console.log(matheus);
matheus.name = "Matheus";
// constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 22);
console.log(joao);
// campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
fusca.name = "Fusca Turbo";
//herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class killerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new killerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
//this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
// getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const arymanReis = new Person("Aryman", "Reis");
console.log(arymanReis.name);
console.log(arymanReis.fullName);
// setter
class Coords {
    set fillx(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set filly(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.fillx = 15;
myCoords.filly = 0;
myCoords.filly = 10;
console.log(myCoords);
console.log(myCoords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello Word");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título é: ${this.title}`;
    }
}
// override de métodos 
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("testanto outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
// public
class c {
    constructor() {
        this.x = 10;
    }
}
const cInstance = new c();
console.log(cInstance.x);
// protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        console.log("Este método é protegido");
    }
}
class F extends E {
    showX() {
        console.log("X: " + this.x);
    }
    showProtectedMethod() {
        this.protectedMethod();
    }
}
const fInstance = new F();
fInstance.showX();
fInstance.showProtectedMethod();
// private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
        console.log("Método privado");
    }
    showPrivateMethod() {
        this.privateMethod();
    }
}
const pObj = new PrivateClass();
console.log(pObj.showName());
pObj.showPrivateMethod();
// static members
class StaticMembers {
    static staticMethod() {
        console.log("Este é um método estático");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// generic class
class item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new item("caixa", "surpresa");
console.log(newItem);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
const secondItem = new item(12, true);
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);
// parameter properties
class parameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQnt() {
        return `Qtd total: ${this.qty}`;
    }
    get showPrice() {
        return `Qtd total: ${this.qty}`;
    }
}
const newShirt = new parameterProperties("Camisa", 5, 19.99);
console.log(newShirt.name);
//console.log(newShirt.price)
console.log(newShirt.showPrice);
console.log(newShirt.showQnt);
// class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
console.log(pessoa);
console.log(pessoa.name);
// abstract class
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newAbstractObject = new AbstractExample("Aryman");
newAbstractObject.showName();
// relação entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
