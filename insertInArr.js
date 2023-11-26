"use strict";

let arrayIn = [true, "hi", 4, "yes", null, 8 ];
console.log(arrayIn);

function insertInArray(arrayIn, indexBefore, arrayOrPrimiteInsert) {
    let arrayOut = [];

    for(let i=0, j=0; i < arrayIn.length; i++, j++) {
        arrayOut[j] = arrayIn[i];
        if(i === indexBefore) {
            arrayOut.push(arrayOrPrimiteInsert);
            ++j;
        } 
    }

    return arrayOut;
}

arrayIn = insertInArray(arrayIn, 3, "bye");
console.log(arrayIn);