"use strict";

function uts() {
    let fails = 0;
    let i = 1;
    let pass;
    console.log("testNum | Pass/Fail | score | machineActive [| expectedResponse" + 
        " | response]");
    console.log("---");
    function resultTest(testNum,score, machineActive , expectedResult, 
        response = getResponse(score, machineActive)) {
            if(machineActive) {
                    if(response === expectedResult) {
                        pass = "Pass";
                    } else {
                        pass = "Fail"; fails++;
                    }
        } else {
            pass = "Fail"; fails++;
        }
            
            console.log(`${testNum} | ${pass} | ${score} | ${machineActive} | ${expectedResult} | ${response}`);
        }
    

        // ut con un objeto
        let test = {
            score: 75,
            machineActive: false,
            expectedResult: "Switch the machine on"
        }
        resultTest(1,test.score , test.machineActive , test.expectedResult);

        // ut con un array[score,machineActive, expectedResponse]
        let arrayTest = [
            75,
            true,
            `That\'s a great score, you really know your stuff`
        ]

        resultTest(2,arrayTest[0], arrayTest[1], arrayTest[2]);


        // ut con diferentes arrays
        let score = [ 150, -1, 19.2, "19,2", 90] ;
        let machineActive = [true];
        let expectedResponse = [ "This is not possible, an error has occurred", "This is not possible, an error has occurred", "That was a terrible score --- total fail!", "Message Error", "What an amazing score! Did you cheat? Are you for real?"];

        resultTest(3,score[0], machineActive[0], expectedResponse[0]);
        resultTest(4,score[1],machineActive[0], expectedResponse[1]);
        resultTest(5,score[2],machineActive[0], expectedResponse[2]);
        resultTest(6,score[3],machineActive[0], expectedResponse[3]);
        resultTest(7,score[4],machineActive[0], expectedResponse[4]);


    console.log("---")
    console.log("Fails: " + fails);
}