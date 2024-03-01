"use strict";

var _cliente = _interopRequireDefault(require("./cliente.js"));
var _impuestos = _interopRequireDefault(require("./impuestos.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Importación de las clases Cliente e Impuestos desde archivos externos

// Función para calcular impuestos para un cliente dado y sus impuestos correspondientes
var validacion = function validacion(cliente, impuesto) {
  // Se verifica si el ingreso bruto anual y las deducciones son mayores que cero
  // y si el ingreso bruto anual es mayor que las deducciones
  if (impuesto.montoBrutoAnual > 0 && impuesto.deducciones > 0 && impuesto.montoBrutoAnual > impuesto.deducciones) {
    console.log("Cliente: ".concat(cliente._nombre));
    console.log("Su monto bruto anual es de $".concat(impuesto.montoBrutoAnual, " y sus deducciones corresponden a un monto de $").concat(impuesto.deducciones));
    console.log("Dando como resultado un impuesto calculado de $".concat(cliente.calcularImpuesto()));
  } else {
    console.log("Cliente: ".concat(cliente._nombre));
    console.log("Su monto bruto anual es de $".concat(impuesto.montoBrutoAnual, " y sus deducciones corresponden a un monto de $").concat(impuesto.deducciones));
    console.log('Queda exonerado de Impuestos Anuales');
  }
};

// Creación de instancias de Impuestos y Cliente para diferentes clientes
var impuesto1 = new _impuestos["default"](10000, 20000);
var cliente1 = new _cliente["default"]('Claudia', impuesto1);
var impuesto2 = new _impuestos["default"](300000, 40000);
var cliente2 = new _cliente["default"]('Javier', impuesto2);
var impuesto3 = new _impuestos["default"](-50000, 60000);
var cliente3 = new _cliente["default"]('Juan', impuesto3);

// Llamadas a la función calculoImpuesto con diferentes clientes e impuestos
validacion(cliente1, impuesto1);
validacion(cliente2, impuesto2);
validacion(cliente3, impuesto3);