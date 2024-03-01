//Clase que representa a un cliente.
class Cliente {
    //Crea una instancia de Cliente.
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    //Obtiene el nombre del cliente
    get nombre() {
        return this._nombre;
    }

    //Establece el nombre del cliente.
    set nombre(nombre) {
        this._nombre = nombre;
    }

    //Calcula el impuesto del cliente.
    calcularImpuesto() {
        if (this._impuesto.montoBrutoAnual > this._impuesto.deducciones) {
            return ((this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21);;
        } else {
            console.log("Queda exonerado de Impuestos Anuales");
            return 0;
        }
    }
}

export default Cliente;
