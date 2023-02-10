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
