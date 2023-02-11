"use strict";
// Numbers
let idade = 28;
console.log(idade);
// Booleanos
let active = true;
console.log(active);
// String
let firstName = "Balduino";
let lastName = "Fernando";
let fullName = `${firstName} ${lastName}`;
console.log(fullName);
// Enums
var ROLES;
(function (ROLES) {
    ROLES["ADMIN"] = "Administrador";
    ROLES["MANAGER"] = "Gerente";
    ROLES["CEO"] = "Presidente Executivo";
    ROLES["CTO"] = "Presidente de Tecnologi";
})(ROLES || (ROLES = {}));
;
console.log(ROLES.CEO);
// Arrays
let companies = ["Google", "29Dev", "Amazon", 60, true];
// Arrays String
let names = ["Afonso", "Carlos", "Joaquim"];
let planets = ["Terra", "Venus", 'Marte'];
let dadosEstudante = ["André", 20, "Rua do Comércio", "IMAG - Uige"];
