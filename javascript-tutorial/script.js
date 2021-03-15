const myCar = new Object();

myCar.maxSpeed = 50;
myCar.driver = "Dawid";
myCar.drive = function () {
    console.log("now driving");
};

console.log(myCar.maxSpeed);
myCar.drive();

const myCar2 = {
    maxSpeed: 70,
    driver: "David",
    drive: function (speed, time) {
        console.log(speed * time);
    }
}

console.log(myCar2.maxSpeed);
myCar2.drive(50, 3);