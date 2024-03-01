"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
//Clase que representa a un impuesto.
var Impuestos = /*#__PURE__*/function () {
  //Crea una instancia de impuesto.
  function Impuestos(montoBrutoAnual, deducciones) {
    _classCallCheck(this, Impuestos);
    this._montoBrutoAnual = montoBrutoAnual;
    this._deducciones = deducciones;
  }

  //Obtiene el monto bruto anual sujeto a impuestos.
  _createClass(Impuestos, [{
    key: "montoBrutoAnual",
    get: function get() {
      return this._montoBrutoAnual;
    }

    //Establece el monto bruto anual sujeto a impuestos.
    ,
    set: function set(value) {
      if (value >= 0) {
        this._montoBrutoAnual = value;
      } else {
        console.error("El monto bruto anual debe ser un valor positivo.");
      }
    }

    //Obtiene el monto total de deducciones aplicables.
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    }

    //Establece el monto total de deducciones aplicables.
    ,
    set: function set(value) {
      if (value >= 0) {
        this._deducciones = value;
      } else {
        console.error("Las deducciones deben ser un valor positivo.");
      }
    }
  }]);
  return Impuestos;
}();
var _default = Impuestos;
exports["default"] = _default;