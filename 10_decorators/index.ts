// exemplo decorator
function myDecorator() {
  console.log("Iniciando decorator");

  return function (
    target: any,
    propertkey: string,
    descriptor: PropertyDescriptor
  ) {

    console.log("Executando decorator");
    console.log(target);
    console.log(propertkey);
    console.log(descriptor);

  };
}

class myClass {
  @myDecorator()
  testing() {
    console.log("Terminando execução do método");
  }
}

const myObj = new myClass();

myObj.testing();

// multiplos decorators
function a() {
  return function(
    target: any,
    propertkey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou a");
  }
}

function b() {
  return function(
    target: any,
    propertkey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("executou b");
  }
}

class multipleDecorators {

  @a()
  @b()

  testing() {
    console.log("Terminando execução")
  }
}

const multiple = new multipleDecorators();

multiple.testing();

//class decorator
function classDec (constructor: Function) {
  console.log(constructor);

  if (constructor.name === "User") {
    console.log("Criando usuário!");
  }
}

@classDec
class User {
  name;

  constructor(name: string) {
    this.name = name
  }
}

const aryman = new User("Aryman");

console.log(aryman);

// method decorator
function enumerable(value: boolean) {
  return function(target: any, propertkey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  }
}

class Machine {
  name

  constructor(name: string) {
    this.name = name
  }

  @enumerable(false)
  showName() {
    console.log(this)
    return `O nome da máquina é: ${this.name}`
  }
}

const trator = new Machine("Trator");

console.log(trator.showName());

// acessor decorator
class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`
  }

  get showAge() {
    return `Idade do monstro: ${this.age}`
  }
}

const charmander = new Monster("Charmander", 10);

console.log(charmander);

// Property decorator
function formatNumber() {
  return function(target: object, propertkey: string) {

    let value: string

    const getter = function() {
      return value
    }

    const setter = function (newVal: string) {
      value = newVal.padStart(5, "0");
    }

    Object.defineProperty(target, propertkey, {
      set: setter,
      get: getter,
    });
  };
}

class ID {
  @formatNumber()
  id 

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID("1");

console.log(newItem);

console.log(newItem.id);

// exemplo real com class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id 
  createdAt?: Date;

  constructor(id: number) {
    this.id = id
  }
}

@createdDate
class Pen {
  id 

  constructor(id: number) {
    this.id = id
  }
}

const newBook = new Book(12);
const pen = new Pen(55);

console.log(newBook);
console.log(pen);

console.log(newBook.createdAt);

// exemplo real method decorator
function checkIfUserPosted() {

  return function(target: Object, key: string | Symbol, descriptor: PropertyDescriptor) {
    const childFunction = descriptor.value;
  //console.log(childFunction);

    descriptor.value = function(...args: any[]) {
      if(args[1] === true) {
        console.log("Usuário já postou!")
        return null
      } else {
        return childFunction.apply(this, args)
      }
    }

    return descriptor

  }

}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`Post do usuário: ${content}`);
  }
}

const newPost = new Post();

newPost.post("Meu primeiro post!", newPost.alreadyPosted);

// exemplo real proporty decorator
function Max(limit: number) {

  return function(target: Object, propertkey: string) {

    let value: string

    const getter = function() {
      return value
    }

    const setter = function(newVal: string) {
      if(newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} dígitos.`)

        return
      } else {
        value = newVal
      }
    }
    Object.defineProperty(target, propertkey, {
      get: getter,
      set: setter,
    })
  }

}


class Admin {
  @Max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

let pedro = new Admin("pedroadmin12345");
let arymanReis = new Admin("ary");

console.log(arymanReis);