"use strict";
var Car = (function () {
    function Car(engine, tires) {
        this.engine = engine;
        this.tires = tires;
        this.description = 'DI';
    }
    // Method using the engine and tires
    Car.prototype.drive = function () {
        return (this.description + " car with ") +
            (this.engine.cylinders + " cylinders and " + this.tires.make + " tires.");
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=car.js.map