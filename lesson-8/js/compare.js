
//Javascript---dynamic & prototype based

let car = {
    make:"LandRover",
    model:"Sports",
    start:function(){
        console.log("Car started");
    }
}


//Java--static & class-based

class Car{
    String make;
    String model;

    public void start(){
        FileSystem.out.println("Car started");
    }

}
Car myCar = new Car();
myCar.make = "LandRover";