// Numbers

let idade: number = 28;

console.log(idade);

// Booleanos
let active: boolean = true;
console.log(active);


// String
let firstName = "Balduino";
let lastName = "Fernando";
let fullName: string = `${firstName} ${lastName}`;

console.log(fullName);

// Enums
enum ROLES { ADMIN = 'Administrador', MANAGER = 'Gerente', CEO = "Presidente Executivo", CTO = "Presidente de Tecnologi" };

console.log(ROLES.CEO);


// Arrays
let companies = ["Google", "29Dev", "Amazon", 60, true];

// Arrays String
let names: string[] = ["Afonso", "Carlos", "Joaquim"];
let planets: Array<string> = ["Terra", "Venus", 'Marte'];
let dadosEstudante: Array<any> = ["André", 20, "Rua do Comércio", "IMAG - Uige"];