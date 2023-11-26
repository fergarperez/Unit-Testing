"use strict";

function getResponse(score, machineActive) {
    let response;
    (machineActive) ?
        response = (score < 0 || score > 100) ? "This is not possible, an error has occurred" :
            (score >= 0 && score <=19) ? "That was a terrible score --- total fail!" :
            (score >= 20 && score <=39) ? `You know some things, but it's a pretty bad score. Needs Improvement.` : 
            (score >= 40 && score <=69) ? "You did a passable job, not bad!" :
            (score >= 70 && score <=89) ? `That\'s a great score, you really know your stuff` :
            "What an amazing score! Did you cheat? Are you for real?"
        : 
        response = "Switch the machine on";
    return response
}