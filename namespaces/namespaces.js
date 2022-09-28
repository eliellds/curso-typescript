"use strict";
var Areas;
(function (Areas) {
    const PI = 3.14;
    function areaCircunferencia(raio) {
        return PI * Math.pow(raio, 2);
    }
    Areas.areaCircunferencia = areaCircunferencia;
    function areaRetangulo(base, altura) {
        return base * altura;
    }
    Areas.areaRetangulo = areaRetangulo;
})(Areas || (Areas = {}));
const PI = 2.99;
console.log(Areas.areaCircunferencia(10));
console.log(Areas.areaRetangulo(10, 20));
console.log(PI);
//# sourceMappingURL=namespaces.js.map