// CLASSES PROJECT
// In this project, you will build a vehicle factory that manufactures both cars and trucks.
// Read each set of instructions carefully!

// BUILD YOUR FACTORY!

// DECLARE A FACTORY CLASS
// All automobiles manufactured should have the following properties & default values: make (MyCar), airbags (true), abs (true), warranty (60,000 miles / 3 years)
// This factory should also include two functions: massBuild() and customerBuild()

// massBuild should receive the following parameter: quantity
// It should print "Building QUANTITY COLOR TRIM MODEL's" i.e: "Building 100 blue premium sedans"

// customerBuild should receive the following parameters: color, options.
// It should print "Building one COLOR TRIM MODEL with the following options: OPTIONS", i.e: "Building one red sport convertible with the following options: heated seats, rear spoiler"

// Create the Factory class below:

class Factory {
  constructor() {
    this.make = "MyCar";
    this.airbags = true;
    this.abs = true;
    this.warranty = "60,000 miles / 3 years";
  }

  massBuild(quantity) {
    console.log(`Building ${quantity} ${this.color} ${this.trim} ${this.model}s`);
  }

  customerBuild(color, options) {
    console.log(`Building one ${color} ${this.trim} ${this.model} with the following options: ${options.join(", ")}`);
  }
}

// CREATE A SUB-CLASS CALLED CAR
// It should extend from Factory.
// The constructor should have the following parameters: model, doors, color, enginetype, transmission, trim, wheelstrim, audio, seatstrim, moonroof.
// The values should be specified when creating an instance of Car.
//
// It should specifically inherit the warranty property from Factory so we can modify it.
// Car should also have the following additional properties & default values: engineSize (4), navigation (true), backupCamera (true), warranty (100,000 miles / 5 years)
// Write your code below:

class Car extends Factory {
  constructor(model, doors, color, engineType, transmission, trim, wheelsTrim, audio, seatsTrim, moonroof) {
    super();
    this.model = model;
    this.doors = doors;
    this.color = color;
    this.engineType = engineType;
    this.transmission = transmission;
    this.trim = trim;
    this.wheelsTrim = wheelsTrim;
    this.audio = audio;
    this.seatsTrim = seatsTrim;
    this.moonroof = moonroof;
    this.engineSize = 4;
    this.navigation = true;
    this.backupCamera = true;
    this.warranty = "100,000 miles / 5 years";
  }
}

// CREATE A SUB-CLASS CALLED SPORT
// It should extend from Car.
// The constructor should have the following parameters: model, trim, transmission, top, color, seatsTrim, audio, wheelsTrim.
// The values should be specified when creating an instance of Sport.
//
// Sports cars should also have the following additional properties & default values: moonroof (false), engineType (gasoline), convertible (true), doors (2)
// Write your code below:

class Sport extends Car {
  constructor(model, trim, transmission, top, color, seatsTrim, audio, wheelsTrim) {
    super(model, 2, color, "gasoline", transmission, trim, wheelsTrim, audio, seatsTrim, false);
    this.top = top;
    this.convertible = true;
  }
}

// CREATE A SUB-CLASS CALLED TRUCK
// What, you thought the "MyCar" brand would only make cars? :)
//
// It should extend from 'Factory'.
// The constructor should have the following parameters: model, color, engineSize, hitch, bed, navigation. The values should be specified when creating an instance of Truck.
// Truck should also have the following properties, standard: backupCamera (true), audio (basic), trim (rugged)
// It should also inherit the warranty property so we can extend it to: 150,000 miles / 6 years.
// Write your code below:

class Truck extends Factory {
  constructor(model, color, engineSize, hitch, bed, navigation) {
    super();
    this.model = model;
    this.color = color;
    this.engineSize = engineSize;
    this.hitch = hitch;
    this.bed = bed;
    this.navigation = navigation;
    this.backupCamera = true;
    this.audio = "basic";
    this.warranty = "150,000 miles / 6 years";
    this.trim = "rugged";
  }
}

// LET'S BUILD SOME CARS AND TRUCKS!

// SEDAN MASS PRODUCTION
// Create an instance of Car.
// The following properties must be specified: model (sedan), color (red), enginetype (hybrid), transmission (automatic), trim (luxury), wheels (base), audio (premium), seats (leather), and moonroof (true)

// Write your 'sedan' instance below:

const sedan = new Car("sedan", "red", "hybrid", "automatic", "luxury", "base", "premium", "leather", true);

// Print your sedan. It should have all the above properties.
// Write your code below:

console.log(sedan);

// Print calling massBuild(), building 35,000 cars.
// It should print: "Building 35000 red luxury sedans."
// Write your code below:

sedan.massBuild(35000);

// Print, calling customerBuild(), building one yellow sedan with the following options, as an array: weather package, satellite radio, rear spoiler.
// It should read: "Building one yellow luxury sedan with the following options: weather package, satellite radio, rear spoiler"
// Write your code below:

sedan.customerBuild("yellow", ["weather package", "satellite radio", "rear spoiler"]);

// SUNMOBILE MASS PRODUCTION
// Create an instance of Sport.
// The following properties must be specified: model (SunMobile), trim (base), transmission (manual),  top (hard top), color (red), seats (leather), audio (premium), wheels (premium).

// Write your 'sunMobile' instance below:
// Write your code below:

const sunMobile = new Sport("SunMobile", "base", "manual", "hard top", "red", "leather", "premium", "premium");

// Print your sunMobile. It should have all of the above properties. Plus, the extended warranty.
// Write your code below:

console.log(sunMobile);

// Print calling massBuild(), building 15,000 cars.
// It should print: "Building 15000 red base SunMobiles."
// Write your code below:

sunMobile.massBuild(15000);

// Print calling customerBuild(), building one black SunMobile with the following options, as an array: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control.
// It should read: "Building one black base SunMobile with the following options: hid headlights, sports suspension, leather steering wheel, heated seats, adaptive cruise control"
// Write your code below:

sunMobile.customerBuild("black", ["hid headlights", "sports suspension", "leather steering wheel", "heated seats", "adaptive cruise control"]);

// BIGRIG MASS PRODUCTION
// The BigRig should inherit from Truck.
// The following properties must be specified: model (Big Rig), color (blue), trim (sport), engineSize (8), hitch (true), bed (standard), navigation (true), doors (2)

// Write your 'bigRig' instance below:
// Write your code below:

const bigRig = new Truck("Big Rig", "blue", "sport", "8", true, "standard", true, 2);

// Print your bigRig. It should have all the above properties. Plus, the extended warranty.
// Write your code below:

console.log(bigRig);

// Print calling massBuid(). It should build 35000 trucks.
// It should print: "Building 35000 blue sport Big Rigs."
// Write your code below:

bigRig.massBuild(35000);

// Print calling customerBuild(). It should build a red Big Rig with the following options, as an array: seat warmers, tinted windows, fog lamps.
// It should print: "Building one red sport Big Rig with the following options: seat warmers, tinted windows, fog lamps"
// Write your code below:

bigRig.customerBuild("red", ["seat warmers", "tinted windows", "fog lamps"]);
