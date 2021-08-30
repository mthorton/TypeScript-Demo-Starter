
// 1
class Person {
    // 2
    firstName: string;
    lastName: string;

    sayHello(){                   // 3
        console.log("Hello", this.firstName);
    }
}

// //3
// let phil: Person = new Person();

// // 4
// phil.firstName = "Phil";
// phil.lastName = "Donahue";

// 4
let kenn: Person = new Person();
// 5 
kenn.firstName = "Kenn";
// 6 
kenn.sayHello();




class Game {
    constructor(name: string, maker: string){ //2
        this.gameName = name; // 4
        this.gameMaker = maker;
    }
    gameName: string; // 3
    gameMaker: string;
}

// 5 
let battleship: Game = new Game('Battleship', 'Hasbro');




class Vehicle {
    type: string;
    make: string;
    model: string;
    manufactureYear: number;
    runs: boolean;
    topSpeed: number;
}

//Example One 
class Automobile extends Vehicle {
    isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();
myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volve";

//Example Two 

class Motorcycle extends Vehicle {
    easyToDoWheelie: boolean;
}

let myMotorcycle: Motorcycle = new Motorcycle();
myMotorcycle.easyToDoWheelie = true;
myMotorcycle.topSpeed = 180;


//2.12 - Parameter Properties

// class Store {
//     constructor(name: string, city: string){
//         this.name = name;
//         this.city = city;
//     }
//     name: string;
//     city: string;
// }

class Store {
    constructor(public name: string, public city: string){}
}

let ikea: Store = new Store('Ikea', 'Fishers');


//2.13 - Accessors

class Employee extends Person{

    private _salary: number;

    getSalary(): string {
        return this._salary.toString();
    }

    setSalary(newSalary: number) {
        this._salary = newSalary;
    }
}

let newEmployee = new Employee();
newEmployee.setSalary(30000);
//newEmployee._salary = 0; //This breaks. 
let salaryResult: string = newEmployee.getSalary();
console.log("The salary is:", salaryResult);
