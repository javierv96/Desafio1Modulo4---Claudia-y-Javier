//Clase que representa a un impuesto.
class Impuestos {
    //Crea una instancia de impuesto.
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }

    //Obtiene el monto bruto anual sujeto a impuestos.
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }

    //Establece el monto bruto anual sujeto a impuestos.
    set montoBrutoAnual(value) {
        if (value >= 0) {
            this._montoBrutoAnual = value;
        } else {
            console.error("El monto bruto anual debe ser un valor positivo.");
        }
    }

    //Obtiene el monto total de deducciones aplicables.
    get deducciones() {
        return this._deducciones;
    }

    //Establece el monto total de deducciones aplicables.
    set deducciones(value) {
        if (value >= 0) {
            this._deducciones = value;
        } else {
            console.error("Las deducciones deben ser un valor positivo.");
        }
    }
}

export default Impuestos;
