// campos em classes
class User {
  name!: string
  age!: number
}

const matheus = new User()

console.log(matheus);
matheus.name = "Matheus";

// constructor
class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new NewUser("João", 22)

console.log(joao);

// campo readonly

class Car {
  name
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const fusca = new Car ("Fusca");

console.log(fusca);

console.log(fusca.wheels);

fusca.name = "Fusca Turbo";

//herança e super
class Machine {
  name

  constructor(name: string) {
    this.name = name
  }
}

const trator = new Machine("Trator")

class killerMachine extends Machine {
  guns

  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const destroyer = new killerMachine("Destroyer", 4)

console.log(trator);
console.log(destroyer);

// métodos
class Dwarf {
  name

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log("Hey Stranger");
  }
}

const jimmy = new Dwarf("Jimmy");

console.log(jimmy.name);

jimmy.greeting();