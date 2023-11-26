"use strict";

let array = [true, "hi", 4, "yes", null, 8 ];
console.log(array);

function insertInArray(array, indexBefore, arrayOrPrimiteInsert) {
    let arrayO = [];

    for(let i=0, j=0; i < array.length; i++, j++) {
        arrayO[j] = array[i];
        if(i === indexBefore) {
            arrayO.push(arrayOrPrimiteInsert);
            ++j;
        }
    }
    
    for(let i=0; i < arrayO.length; i++) {
        array[i] = arrayO[i];
    }
}

insertInArray(array, 3, "bye");
console.log(array);