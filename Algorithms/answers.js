// Answers to pages 16, 20, and 22 in the Coding Dojo Algorithm Book
// Page 16
// Setting and Swapping
console.log("\nSetting and Swapping");
var myNumber = 42;
var myName = "Nicholas";
console.log("myNumber is initially: " + myNumber); //Before Swap
console.log("myName is initially: " + myName);

console.log("Swap:");
var temp = myNumber;
myNumber = myName;
myName = temp;
console.log("myNumber is now: " + myNumber);
console.log("myName is now: " + myName);

// Print -52 to 1066
console.log("\nPrint -52 to 1066");
for (var i = -52; i <= 1066; i++) {
    console.log(i);
}

// Don't Worry, Be Happy
console.log("\nDon't Worry, Be Happy");

function beCheerful() {
    for (var i = 1; i <= 98; i++) {
        console.log("good morning!");
    }
}

beCheerful();

// Multiples of Three -- but Not All
console.log("\nMultiples of Three -- but Not All");
var x = 3;
for (var i = -100; i < 0; i++) {
    if (x * i == -6 || x * i == -3) {
        continue;
    }
    console.log(x * i);
}

// Printing Integers with While
console.log("\nPrinting Integers with While");
var i = 2000;
while (i <= 5280) {
    console.log(i);
    i++;
}

// You Say It's Your Birthday
console.log("\nYou Say It's Your Birthday");

function birthday(var1, var2) { // Takes two-digit month and day as input in any order
    if (var1 == 09 && var2 == 30) {
        console.log("How did you know?");
    } else if (var1 == 30 && var2 == 09) {
        console.log("How did you know?");
    } else {
        console.log("Just another day....");
    }
}
console.log("Test 1: 09/30");
birthday(09, 30);
console.log("Test 2: 30/09");
birthday(30, 09);
console.log("Test 3: 01/01");
birthday(01, 01);

// Leap Year
console.log("\nLeap Year");

function leapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                console.log("It's a Leap Year!");
            } else {
                console.log("It's not a Leap Year...");
            }
        } else {
            console.log("It's a Leap Year!");
        }
    } else {
        console.log("It's not a Leap Year...");
    }
}
console.log("Test 1: year = 4");
leapYear(4);
console.log("Test 2: year = 100");
leapYear(100);
console.log("Test 3: year = 400");
leapYear(400);
console.log("Test 4: year = 3");
leapYear(3);

// Print and Count
console.log("\nPrint and Count");
var count = 0;
for (var i = 512; i <= 4096; i++) {
    if (i % 5 == 0) {
        console.log(i);
        count++;
    }
}
console.log("There are " + count + " multiples of 5 from 512 to 4096.");

// Multiples of Six
console.log("\nMultiples of Six");
var x = 6;
var multiple = 1;
while (true) {
    console.log(x * multiple);
    if (x * multiple == 60000) {
        break;
    }
    multiple++;
}

// Counting, the Dojo Way
console.log("\nCounting, the Dojo Way");
for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        if (i % 10 == 0) {
            console.log("Coding Dojo");
        } else {
            console.log("Coding");
        }
    } else {
        console.log(i);
    }
}

// What Do You Know?
console.log("\nWhat Do You Know?");

function known(incoming) {
    console.log(incoming);
}
known();

// Whoa, That Sucker's Huge...
console.log("\nWhoa, That Sucker's Huge...");