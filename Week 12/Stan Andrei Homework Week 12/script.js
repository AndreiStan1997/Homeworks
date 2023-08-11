console.log("It is working !");
console.log("Uber in OOP");

class User {
    constructor(id, name, email, phoneNumber, paymentMethods) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.paymentMethods = [];
    }

    register(user){
        let x = user;
        return x;
    }

    login(user){
        let x = user;
        console.log("Login successful !");
        return x;
    }

    updateProfile(newName){
        this.name = newName;
        return this.name;
    }

    linkPaymentMethod(paymentMethod){
        this.paymentMethods.push(paymentMethod);
        return paymentMethod;
    }

    viewRideHistory(){}
}

class Customer extends User{
    constructor(id, name, email, phoneNumber, paymentMethods, loyaltyPoints){
        super(id, name, email, phoneNumber, paymentMethods)
        this.loyaltyPoints = loyaltyPoints;
    }

    redeemLoyaltyPoints(points){
        this.points = points;
        return points;
    }
}

class Driver extends User{
    constructor(id, name, email, phoneNumber, paymentMethods, vehicle, licensePlate){
        super(id, name, email, phoneNumber, paymentMethods)
        this.vehicle = vehicle;
        this.licensePlate = licensePlate;
    }

    register(driver){
        let x = driver;
        return x;
    }

    updateProfile (newName){
        this.name = newName;
        return this.name;
    }

    acceptRideRequest(ride){
        let ride = true;
        return ride;
    }

    cancelRideRequest(ride){
        let ride = false;
        return ride;
    }

    completeRide(ride){
        let x = ride;
        console.log("Ride x complete !");
    }

    viewEarnings(){}
}

class Ride {
    constructor(id, user, driver, pickupLocation, destination, fare){
        this.id = id;
        this.user = user;
        this.driver = driver;
        this.pickupLocation = pickupLocation;
        this.destination = destination;
        this.fare = fare;
    }

    requestRide(pickupLocation, destination){
        let x = pickupLocation;
        let y = destination;
        return x, y;
    }

    calculateFare(){
        let x = 345;
        return x;
    }

    cancelRide(){
        console.log("Ride canceled");
    }

    rateDriver(rating, review){
        let x = rating;
        let y = review;
        return x,y;
    }
}

class PaymentMethod {
    constructor(id, type, lastFourDigits){
        this.id = id;
        this.type = type;
        this.lastFourDigits = lastFourDigits;
    }
}