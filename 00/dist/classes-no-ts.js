"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    greet() {
        return 'Bom dia vindo do ' + this.firstName;
    }
}
const BAF = new Person("Balduino", "Fernando", 28);
console.log(`${BAF.firstName} ${BAF.lastName} tem ${BAF.age} anos de idade`);
console.log(BAF.greet());
