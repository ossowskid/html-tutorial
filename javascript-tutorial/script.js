// const myCar = {
//     maxSpeed: 70,
//     driver: "David",
//     drive: function (speed, time) {
//         console.log(speed * time);
//     },

//     logDriver: function () {
//         console.log("Driver name is " + this.driver);
//     }
// };

const Car = function (maxSpeed, driver) {
    
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    this.drive = function (speed, time) {
        console.log(speed * time);
    };
    this.logDriver = function () {
        console.log("Driver name is " + this.driver);
    }

};


const myCar = new Car(70, "Ninja Man");
const myCar2 = new Car(10, "Humpty Dumpty");
const myCar3 = new Car(20, "Dawid");
const myCar4 = new Car(900, "James Bond");

myCar.drive(30, 5);
myCar3.logDriver();
