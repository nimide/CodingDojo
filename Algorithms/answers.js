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
for (var i = -100; i <= 0; i++) {
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
sum = 0;

function addOdds(num1, num2) {
    if (num1 == num2) {
        sum = 0;
    } else
        for (var i = num1; i <= num2; i++) {
            if (i % 2 != 0) {
                sum = sum + i;
            }
        }
}
addOdds(-300000, 300000);
console.log(sum);

// Countdown by Fours
console.log("\nCountdown by Fours");
var i = 2016;
while (i > 0) {
    console.log(i);
    i -= 4;
}

// Flexible Countdown
console.log("\nFlexible Countdown version 1");
var lowNum = 2;
var highNum = 9;
var mult = 3;
for (var i = highNum; i >= lowNum; i--) {
    if (i % mult == 0) {
        console.log(i);
    }
}

console.log("\nFlexible Countdown version 2");

function flexCountdown(lowNum, highNum, mult) {
    for (var i = highNum; i >= lowNum; i--) {
        if (i % mult == 0) {
            console.log(i);
        }
    }
}
flexCountdown(2, 9, 3);

// The Final Countdown
console.log("\nThe Final Countdown");

function finalCountdown(param1, param2, param3, param4) {
    var i = param2;
    while (i <= param3) {
        if (i % param1 == 0 && i != param4) {
            console.log(i);
        }
        i++;
    }
}
finalCountdown(3, 5, 17, 9);


// Page 20
// Countdown
console.log("\nCountdown");