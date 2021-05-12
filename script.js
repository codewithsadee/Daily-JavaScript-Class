//* adding nodeJs modules for prompt <==//
"use srtict";
const ps = require("prompt-sync");
const prompt = ps();

var level = 1; //!==> Initial Level Up Value
var score = 100; //!==> Default Score Value

//! Main Game Function
function GAMEBOARD() {

  //! Level 1 Object
  var level1 = {
    userInput: parseInt(prompt("Guess a number 1 - 5 : ")),
    random: Math.floor(Math.random() * 5) + 1,
  };

  //! Level 1 Win Condition
  if (level1.userInput == level1.random) {

    rightAnsMessage(); //!==> Level 2 Right Answer (Function Call)

    level++;
    score += 100;

    //! Level 2 Main Function
    function LEVEL2() {

      //! Level 2 Object
      var level2 = {
        userInput: parseInt(prompt("Guess a number 1 - 10 : ")),
        random: Math.floor(Math.random() * 10) + 1,
      };

      //! Level 2 Win Condition
      if (level2.userInput == level2.random) {

        rightAnsMessage(); //!==> Level 2 Right Answer (Function Call)

      } else {
        score -= 20; //!==> Level 2 Every Time Game Score minus 20

        wrongAnsMessage(); //!==> Level 2 Wrong Answer (Function Call)

        //! Level 2 GAME OVER Condition
        if (score == 0) {
          gameOverMessage(); //!==> Level 1 GAME OVER (Function Call)
        } else {
          LEVEL2();
        }
      }
    }
    
    LEVEL2(); //!==> Calling Level 2 Main Function

  } else {
    score -= 20; //!==> Level 1 Every Time Game Score minus 20
    wrongAnsMessage(); //!==> Level 1 Wrong Answer (Function Call)

    //! Level 1 Game Over Condition
    if (score == 0) {
      gameOverMessage(); //!==> Level 1 GAME OVER (Function Call)
    } else {
      GAMEBOARD();
    }
  }

  //! Wrong Answer Console Message Function
  function wrongAnsMessage() {
    console.log(" __________________________________________");
    console.log("|..........................................|");
    console.log("|. Chance_"+(score/20)+" ..... LEVEL_" + level + " ..... Score_"+score+" ..|");
    console.log("|..........................................|");
    console.log("|................ ☠WRONG☠ .................|");
    console.log("|................ Number "+level1.random+" ................|");
    console.log("|......... Score -20 . Chance -1 ..........|");
    console.log("|..........................................|");
    console.log("|__________________________________________|");
    console.log();
  }

  //! Right Answer Console Message Function
  function rightAnsMessage(){
    console.log(" __________________________________________");
    console.log("|..........................................|");
    console.log("|. Chance_"+(score/20)+" ..... LEVEL_" + level + " ..... Score_"+score+" ..|");
    console.log("|..........................................|");
    console.log("|............... 😀RIGHT😀 ................|")
    console.log("|.............. LEVEL UP! 2 ...............|")
    console.log("|......... Score +100 . Chance +5 .........|")
    console.log("|..........................................|");
    console.log("|__________________________________________|");
    console.log();
  }

  //! GAME OVER Console Message Function
  function gameOverMessage(){
    console.log(' __________________________________________')
    console.log('|..........................................|')
    console.log('|. Chance_'+(score/20)+' ..... LEVEL_'+level+' ..... Score_'+score+' ...|')
    console.log('|..........................................|')
    console.log('|................ ☠WRONG☠ .................|')
    console.log('|................ Number '+level1.random+' ................|')
    console.log('|...............___________................|')
    console.log('|..............| GAME OVER |...............|')
    console.log('|..............|___________|...............|')
    console.log('|__________________________________________|')
  }
}

GAMEBOARD(); //!==> Calling Main Game Function