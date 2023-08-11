console.log("It is working !");

function Highway(vehicleList, vignetteCost){
    this.vehicleList=[];
    this.vignetteCost=vignetteCost;
}

Highway.prototype.enterHighway = function(Vehicle){
    this.vehicleList.push(Vehicle);
}

function Vehicle(name, runingSpeed, Driver){
    this.name = name;
    this.runingSpeed = runingSpeed;
    this.Driver = Driver;
}

Vehicle.prototype.increaseSpeed = function(speed){
    this.runingSpeed = this.runingSpeed + speed;
}

function Bus(){
    Vehicle.call(this);
}
Bus.prototype = Object.assign(Bus.prototype, Vehicle.prototype);

function Car(){
    Vehicle.call(this);
}
Car.prototype = Object.assign(Car.prototype, Vehicle.prototype);

function Truck(){
    Vehicle.call(this);
}
Truck.prototype = Object.assign(Truck.prototype, Vehicle.prototype);

function Driver(name, walletMoney){
    this.name = name;
    this.walletMoney = walletMoney;
}

function Police(){
    Vehicle.call(this);
}
Police.prototype = Object.assign(Police.prototype, Vehicle.prototype);
Police.prototype.checkVehicleSpeed = function(){
   return this.runingSpeed;
}
Police.prototype.speedLimitsByVehicleType = 0;
Police.prototype.fineByVehicleType = true;
var myCar = new Vehicle(Toyota, 1000);