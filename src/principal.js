// Importación de las clases Cliente e Impuestos desde archivos externos
import Cliente from './cliente.js';
import Impuestos from "./impuestos.js";

// Función para calcular impuestos para un cliente dado y sus impuestos correspondientes
const calculoImpuesto = (cliente, impuesto) => {
    // Imprimir información sobre el cliente y sus impuestos
    console.log(`Cliente: ${cliente._nombre}`);
    console.log(`Su monto bruto anual es de $${impuesto.montoBrutoAnual} y sus deducciones corresponden a un monto de $${impuesto.deducciones}`);
    console.log(`Dando como resultado un impuesto calculado de $${cliente.calcularImpuesto()}`);
}

// Creación de instancias de Impuestos y Cliente para diferentes clientes
const impuesto1 = new Impuestos(10000, 20000);
const cliente1 = new Cliente('Claudia', impuesto1);

const impuesto2 = new Impuestos(300000, 40000);
const cliente2 = new Cliente('Javier', impuesto2);

const impuesto3 = new Impuestos(50000, 60000);
const cliente3 = new Cliente('Juan', impuesto3);

// Llamadas a la función calculoImpuesto con diferentes clientes e impuestos
calculoImpuesto(cliente1, impuesto1);
calculoImpuesto(cliente2, impuesto2);
calculoImpuesto(cliente3, impuesto3);
