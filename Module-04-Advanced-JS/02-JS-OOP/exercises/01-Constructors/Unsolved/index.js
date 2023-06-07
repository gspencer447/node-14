// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech){
    this.name = name;
    this.tech = tech;
    this.introduction = function(); {
        console.log(`Hi, my name is ${this.name}, and my tech of choice is ${this.tech}`)
    };
    const dev1 = new Developer('Billy', 'Linux');
    console.log(dev1);
}

// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor

// TODO: Call the 'introduction()' method on the new object
