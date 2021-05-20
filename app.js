
//Arraay literal [] (stored ina variable)
var numbers = [3, 55, 87];
console.log(numbers);

//Creating an array with new JS keywords
var strings= new Array("lime", "lemon", "cherry", "apple");
console.log(strings);

// creating an array with new JS keyword make the index
var booleans = new Array()
booleans[0]=9<10;
booleans[1]=11===11.5;
booleans[2]=12 >8;
booleans[3]="sky" == "SKY"
console.log(booleans);

// creat array of classmates names

var classmates = ["April", "Trent", "Katie", "Sky", "Heather", "Danielle"]

//check index position
console.log(classmates[2]);
//.length Method 
console.log(classmates.length);
//Array Methods
//built in methods
//.push adds an index at end of an array
classmates.push("Mara");
console.log(classmates)

//.pop removes an index from END of array
classmates.pop();
console.log(classmates);
//.shift removes first index
classmates.shift();
console.log(classmates);
//.unshift adds to beginning of array
classmates.unshift("Steve");
console.log (classmates);
//.spilce ADD/REMOVE an index in the array
//Replace 1 element at a certain index
// (2) Index Number (1) CHange at index, "Name" to add. 0 = no one reomved

classmates.splice(2,0,"Eli");

for (i=0; i<classmates.length; ii++); {
    console.log(classmates[i]);
}

// finding an index
// locate an array item
console.log(classmates.indexOf("Trent"));

//Create an Array called "donuts" that list 7-10 different items
var donuts = ["chocolate", "glazed", "sprinkles", "strawberry", "double-chocolate", "blueberry", "raspberry-filled", "long-john"]
//1 Using a loop, iterate through this array and console.log all the donuts

    
//2 Write the command to remove the first donut fron the array
donuts.shift();


//3 Write the command to remove the last donuts from the array
donuts.pop();

//4 Write the command to add a new donut "lime zest" to the front of the array
donuts.unshift("lime zest");

//5 Write the command to add another donut "lemon pie" to the end of the array
donuts.push("lemon pie");

//6 Use either the join() or toString() method to convert an array to a string.
donuts.toString();
//7 Write the command to make a copy of the array using slice. 
//The copy should NOT include two donuts.
donuts.slice(0,1,2,3,4,5,6,7,)

//8 Write the command that gives the indexOf where "chocolate" is located.
console.log(donuts.indexOf("chocolate"));

//9 Write the command that gives the indexOf where "glazed" is located (You may get a negative number).
console.log(donuts.indexOf("glazed"));

//10 **Using the splice method, remove one donut from the array and add another.
donuts.splice(2, 1, "cake donut")

//11 **Create a new variable called withSyed and set it equal to the donut array concatenated with the string of "Bob".
var withSyed = donuts.concat("Bob")
console.log(withSyed)


//12 **Create a function called getdonuts() that will display all the donuts in your array and display on your page.

function getdonuts() {document.write(donuts);}
getdonuts ();