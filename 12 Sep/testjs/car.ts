class Car {
    model:string;
    price:number;
    constructor(model:string, price:number) {
        this.model = model;
        this.price = price;
    }
    showCar() {
        console.log("Model " + this.model + " - Price " + this.price);
    }
}
var c1=new Car("Maruti",400);
c1.model=500;