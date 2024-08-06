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

//this
class Truck {
  model
  hp 

  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
  }
}

const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500)

volvo.showDetails();
scania.showDetails();

// getters
class Person {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  get fullName() {
    return this.name + " " + this.surname
  }
}

const arymanReis = new Person ("Aryman", "Reis");

console.log(arymanReis.name);
console.log(arymanReis.fullName);

// setter
class Coords {

  x!: number
  y!: number

  set fillx(x: number) {
    if(x === 0) {
      return
    }

    this.x = x

    console.log("X inserido com sucesso")
  }

  set filly(y: number) {
    if(y === 0) {
      return
    }

    this.y = y

    console.log("Y inserido com sucesso");
  }

  get getCoords() {
    return `X: ${this.x} e Y: ${this.y}`
  }
}

const myCoords = new Coords()

myCoords.fillx = 15;
myCoords.filly = 0;
myCoords.filly = 10;

console.log(myCoords);
console.log(myCoords.getCoords);
// implements
interface showTitle {
  itemTitle(): string
}

class blogPost implements showTitle {

  title 

  constructor(title: string) {
    this.title = title
  }

  itemTitle() {
    return `O título do post é: ${this.title}`;
  }
}

const myPost = new blogPost("Hello Word")

console.log(myPost.itemTitle());

class TestingInterface implements showTitle {
  title

  constructor(title: string) {
    this.title = title
  }

  itemTitle() {
    return `O título é: ${this.title}`
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

const myObject = new Nova()

myObject.someMethod()

// public
class c {
  public x = 10
}

const cInstance = new c()

console.log(cInstance.x);

// protected
class E {
  protected x = 10;

  protected protectedMethod() {
    console.log("Este método é protegido");
  }

}

class F extends E {

  showX() {
    console.log("X: " + this.x)
  }

  showProtectedMethod() {
    this.protectedMethod()
  }

}

const fInstance = new F()

fInstance.showX();
fInstance.showProtectedMethod();

// private
class PrivateClass {
  private name = "Private";

  showName() {
    return this.name
  }

  private privateMethod() {
    console.log("Método privado")
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
  static prop = "Teste static";

  static staticMethod() {
    console.log("Este é um método estático");
  }
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();

