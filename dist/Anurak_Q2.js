class EuropeCar {
    constructor(id, brand, color, distanceUsed) {
        this.id = id;
        this.brand = brand;
        this.color = color;
        this.distanceUsed = distanceUsed;
    }
    showCar() {
        return `Show Car : ${this.brand} ${this.brand} ${this.brand}`;
    }
    use(distance) {
        return this.distanceUsed = +distance;
    }
}
const euCar1 = new EuropeCar(1, "ISUZU", "Red", 0);
console.log(`Id: ${euCar1["id"]}\nBrand: ${euCar1["brand"]}\nColor: ${euCar1["color"]}\nDistance Used: ${euCar1["distanceUsed"]}`);
console.log(euCar1.showCar());
console.log(`DistanceUsed: ${euCar1.use(10)}`);
