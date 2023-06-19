//1. Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:

    //-A method that displays the car info 
    //-A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.

const car = {
    manufacturer: "Toyota",
    model: "Camry",
    yearOfRelease: 2022,
    averageSpeed: 100, // in kilometers per hour
  
    displayInfo() {
      console.log(`Manufacturer: ${this.manufacturer}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year of Release: ${this.yearOfRelease}`);
      console.log(`Average Speed: ${this.averageSpeed} km/h`);
    },
  
    calculateTravelTime(distance) {
      const drivingTime = distance / this.averageSpeed;
      const breaks = Math.floor(drivingTime / 4);
      const totalTravelTime = drivingTime + breaks;
      console.log(`Distance: ${distance} km`);
      console.log(`Estimated Travel Time: ${totalTravelTime} hours`);
    }
  };
  
car.displayInfo();
car.calculateTravelTime(200);

//2. Create an object that contains separately the numerator and the denominator of a fraction, and the following functions for working with this object:

    //-A function for adding two fraction objects.
    //-A function for subtracting two fraction objects.
    //-A function for multiplying two fraction objects.
    //-A function for dividing two fraction objects.
    //-A function for simplifying a fraction object. 

const Fraction = {
    numerator: 0,
    denominator: 1,
  
    // Function to add two fraction objects
    add: function (fraction) {
      const result = Object.create(Fraction);
      result.numerator =
        this.numerator * fraction.denominator +
        fraction.numerator * this.denominator;
      result.denominator = this.denominator * fraction.denominator;
      return result.simplify();
    },
  
    // Function to subtract two fraction objects
    subtract: function (fraction) {
      const result = Object.create(Fraction);
      result.numerator =
        this.numerator * fraction.denominator -
        fraction.numerator * this.denominator;
      result.denominator = this.denominator * fraction.denominator;
      return result.simplify();
    },
  
    // Function to multiply two fraction objects
    multiply: function (fraction) {
      const result = Object.create(Fraction);
      result.numerator = this.numerator * fraction.numerator;
      result.denominator = this.denominator * fraction.denominator;
      return result.simplify();
    },
  
    // Function to divide two fraction objects
    divide: function (fraction) {
      const result = Object.create(Fraction);
      result.numerator = this.numerator * fraction.denominator;
      result.denominator = this.denominator * fraction.numerator;
      return result.simplify();
    },
  
    // Function to simplify the fraction object
    simplify: function () {
      const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
      const commonDivisor = gcd(this.numerator, this.denominator);
      this.numerator /= commonDivisor;
      this.denominator /= commonDivisor;
      return this;
    },
  };

//3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object: 

    //-A method for displaying the time. 
    //-A method for changing the time by a given amount of seconds. 
    //-A method for changing the time by a given amount of minutes.  
    //-A method for changing the time by a given amount of hours. 

    //!Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».

const Time = {
    hours: 0,
    minutes: 0,
    seconds: 0,
      
    // Method to display the time
    displayTime: function () {
        const formattedHours = this.hours.toString().padStart(2, "0");
        const formattedMinutes = this.minutes.toString().padStart(2, "0");
        const formattedSeconds = this.seconds.toString().padStart(2, "0");
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    },
      
    // Method to change the time by a given amount of seconds
    changeBySeconds: function (seconds) {
        this.seconds += seconds;
        this.adjustTime();
        return this.displayTime();
    },
      
    // Method to change the time by a given amount of minutes
    changeByMinutes: function (minutes) {
        this.minutes += minutes;
        this.adjustTime();
        return this.displayTime();
    },
      
    // Method to change the time by a given amount of hours
    changeByHours: function (hours) {
        this.hours += hours;
        this.adjustTime();
        return this.displayTime();
    },
      
    // Helper method to adjust the time if necessary
    adjustTime: function () {
        const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds;
        this.hours = Math.floor(totalSeconds / 3600) % 24;
        this.minutes = Math.floor((totalSeconds % 3600) / 60);
        this.seconds = totalSeconds % 60;
    },
};

