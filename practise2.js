let marks_student1 = 90;
let marks_student2 = 85;
let marks_student3 = 80;
let marks_student4 = 75;
let marks_student5 = 70;


let marks = [90,80,70,60,50,40,]
console.log(marks);
console.log(marks.length);
let heros = ["rehmat", "abdullah", "shari", "adil", "zeeshan"];
console.log(heros);

let items = [240, 450, 120, 567, 245];
let idx = 0;

for (let val of items) {
    console.log(`Value at index ${idx} = ${val}`);
    
    // Calculate offer (assuming 10% discount here)
    let offer = val / 10;
    
    // Apply the offer and update the array
    items[idx] = val - offer;
    
    // Print the value after applying the offer
    console.log(`Value after offer = ${items[idx]}`);
    
    idx++;
}


let ar = [23];


ar[1]= 10
ar[2]= 9
ar[1] = 25



ar.push(98)
ar.unshift(520)

ar.pop();
ar.shift();
ar.splice(1,1,20,30)

console.log(ar);
// // question no 1
let studentName = [];
studentName.push("Rehmat ");
studentName.push("Adil Amin");
// // question no 2
let studentName1={
    names:[]
}
studentName1.push("ali");
studentName2.push("shari");
// // question no 3
let stringarray=["ali,abdullah,shari,adil,zeeshan"]
console.log(stringarray[0]);
console.log(stringarray[1]);
// // question no 4
let numberarray=[90,80,70,60,50,40]
console.log(numberarray[0]);
console.log(numberarray[1]);
// // question no 5
let booleanarray=[true,false,true,true,false]
console.log(booleanarray[0]);
console.log(booleanarray[1]);
// // question no 6
let mixedArray = ["apple", 42, true, { name: "John", age: 30 }, null, undefined];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);
console.log(mixedArray[3]);
console.log(mixedArray[4]);
// question no 7

let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

console.log(qualifications[0]); 
console.log(qualifications[1]); 
console.log(qualifications[2]); 
console.log(qualifications[3]); 
console.log(qualifications[4]); 
console.log(qualifications[5]); 
console.log(qualifications[6]); 
console.log(qualifications[7]); 
// question no 8

let studentNames = ["John", "Jane", "Doe"];
let studentScores = [350, 400, 450]; 

function calculatePercentage(score, totalMarks) {
    return (score / totalMarks) * 100;
}

console.log("Student Scores and Percentages:");
console.log("==============================");
for (let i = 0; i < studentNames.length; i++) {
    let name = studentNames[i];
    let score = studentScores[i];
    let percentage = calculatePercentage(score, 500);

    console.log(`${name}: Scored ${score} out of 500, Percentage: ${percentage.toFixed(2)}%`);
}
// question no 9
let colors = ["Red", "Green", "Blue"];
console.log("Initial Array:", colors);
let colorToAddAtBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddAtBeginning);
console.log("After adding color at the beginning:", colors);
let colorToAddAtEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddAtEnd);
console.log("After adding color at the end:", colors);
colors.unshift("Purple", "Yellow");
console.log("After adding two colors at the beginning:", colors);
colors.shift();
console.log("After deleting the first color:", colors);
colors.pop();
console.log("After deleting the last color:", colors);
let indexToAdd = prompt("Enter the index where you want to add the color:");
let colorToAddAtIndex = prompt("Enter the color name to add:");
indexToAdd = parseInt(indexToAdd);
colors.splice(indexToAdd, 0, colorToAddAtIndex);
console.log(`After adding ${colorToAddAtIndex} at index ${indexToAdd}:`, colors);
let indexToDelete = prompt("Enter the index from where you want to delete color(s):");
let numberOfColorsToDelete = prompt("Enter the number of colors to delete:");
indexToDelete = parseInt(indexToDelete);
numberOfColorsToDelete = parseInt(numberOfColorsToDelete);
colors.splice(indexToDelete, numberOfColorsToDelete);
console.log(`After deleting ${numberOfColorsToDelete} color(s) from index ${indexToDelete}:`, colors);
// question no 10

let  = [85, 72, 93, 64, 91, 78];
studentScores.sort(function(a, b) {
    console.log(a-b);
});
console.log("Sorted Student Scores (Ascending Order):", studentScores);
// question no 11
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = [];
selectedCities = cities.slice(0, 3); 
console.log("Cities Array:", cities);
console.log("Selected Cities Array:", selectedCities);
// question no 12
// Array with strings
let  arr = ["This ", " is ", " my ", " cat"];

// Joining array elements into a single string
let  singleString = arr.join('');

// Displaying the single string
console.log(singleString); // Outputs: "This is my cat"
// question no 13
// Initialize an empty array to act as a queue
let queue = [];

// Function to add elements to the queue (enqueue)
function enqueue(value) {
    queue.push(value); // Add the value to the end of the array
}

// Function to remove elements from the queue (dequeue)
function dequeue() {
    if (queue.length === 0) {
    console.log( "Queue is empty");
    }
    return queue.shift(); // Remove and return the first element from the array
}

// Example usage:
enqueue("Apple");
enqueue("Banana");
enqueue("Cherry");

console.log(dequeue()); // Outputs: Apple
console.log(dequeue()); // Outputs: Banana
console.log(dequeue()); // Outputs: Cherry

enqueue("Date");
enqueue("Elderberry");

console.log(dequeue()); 
console.log(dequeue()); 

console.log(dequeue()); 
// question no 15
let  phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
console.log('<select id="manufacturerSelect">');
for (var i = 0; i < phoneManufacturers.length; i++) {
    console.log('<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>');
}
console.log('</select>');









