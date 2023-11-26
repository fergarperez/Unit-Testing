"use strict";


function uts() {
    let pass;
    let fails = 0;

    console.log("testNum | Pass/Fail | array | expectedArray");
    console.log("---");

    function getArray(testNum, array, expectedArray = [true, "hi", 4, "yes", "bye", null, 8 ]) {
        for(let i=0; i<array.length; i++) {
            pass = array[i] === expectedArray[i] ? "Pass" : "Fail", fails++;
        }

        console.log(`${testNum} | ${pass} | ${array} | ${expectedArray}`);
    }

    array = insertInArray(arrayIn, 3, "bye");
    getArray(1, array);

    console.log("---")
    console.log("Fails: " + fails);
}