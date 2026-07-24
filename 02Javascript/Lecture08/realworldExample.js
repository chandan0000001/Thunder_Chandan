function details(name,age,...hobbies){
    // REST: hobbies collects remaining arguments into array
    console.log(`${name} is ${age} year OLD`);
    console.log("Hobbies: ", hobbies);
}
const person = ["chandan" ,23 ,"reading" , "sining" , "Cooking" , "Arguing","Ai Models"];
// SPREAD: Unpack array into individual arguments
details(...person);

// chandan is 23 year OLD
// Hobbies:  [ 'reading', 'sining', 'Cooking', 'Arguing', 'Ai Models' ]