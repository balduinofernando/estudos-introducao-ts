class Person {
    private readonly firstName: string;
    private readonly lastName: string;
    private age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet(): string {
        return 'Bom dia vindo do ' + this.firstName;
    }
}

const BAF = new Person("Balduino", "Fernando", 28);

class User extends Person {

}