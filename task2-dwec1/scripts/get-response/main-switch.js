"use strict";

function getResponse(score, machineActive) {
    let response;
    if(machineActive) {
        switch (score) {
            case (score < 0 || score > 100) :
                response = "This is not possible, an error has occurred";
                break;
            case (score >= 0 && score <=19) :
                response = "That was a terrible score --- total fail!";
                break;
            case (score >= 20 && score <=39) :
                response = "You know some things, but it\'s a pretty bad score. Needs Improvement.";
                break;
            case (score >= 40 && score <=69) :
                response = "You did a passable job, not bad!";
                break;
            case (score >= 70 && score <=89) :
                response = "That\'s a great score, you really know your stuff";
                break;
            default :
                response = "What an amazing score! Did you cheat? Are you for real?";
                break;
        }
      } else {
        response = "Switch the machine on";
      }
    return response
}