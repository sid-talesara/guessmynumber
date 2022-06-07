'use strict';
//DOM= Document object model

//variable declaration
let random=Math.trunc(Math.random()*20)+1; //random number generator logic
let score=20;
let highscore=0;

//display message declaration
const displayMessage=function(message){
  document.querySelector('.message').textContent=message;
}

//again button function
document.querySelector('.again').addEventListener('click',function(){
    random=Math.trunc(Math.random()*20)+1;
    document.querySelector('.guess').textContent=null;
    console.log('Game is reloaded');
    score = 20;
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    displayMessage('Start guessing...');
});

//reset button function
document.querySelector('.reset').addEventListener('click',function(){
  random=Math.trunc(Math.random()*20)+1;
  highscore=0;
  score=20;
  document.querySelector('.highscore').textContent=highscore;
  document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    displayMessage('Start guessing...');

});

//check button function
document.querySelector('.check').addEventListener('click', function(){
 let guess=Number(document.querySelector('.guess').value);
  console.log(guess);
  document.querySelector('.guess').value='';

  // if no number is entered
  if(!guess){
      displayMessage('🚫 No Number' );
}
  
  //Number is correct
  else if(guess===random){
    displayMessage('🎉 Correct Number') ; 
    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';
    //highscore condition
    if(score>highscore){
      highscore=score;
      document.querySelector('.highscore').textContent=highscore;
    }
    document.querySelector('.number').textContent=random;
   }

   else if(guess!==random){
     
    //score updation condition
      if(score>1){
      displayMessage(guess>random?'📈 Too high':'📉 Too Low'); 
      score--;
      document.querySelector('.score').textContent=score;
      }else{
      displayMessage=('❌ You lost the game') ;
      document.querySelector('.score').textContent=0;
    }
    }
   
//    //When number is high
//    else if(guess>random){
// //score updation condition
//   if(score>1){
//   document.querySelector('.message').textContent='📈 Too high' ; 
//   score--;
//   document.querySelector('.score').textContent=score;
//   }else{
//   document.querySelector('.message').textContent='❌ You lost the game' ;
//   document.querySelector('.score').textContent=0;
// }
// }

// //When number is smaller
// else if(guess<random){
//   //score updation condition
//   if(score>1){
//   document.querySelector('.message').textContent='📉 Too Low' ; 
//   score--;
//   document.querySelector('.score').textContent=score;
// } else{
//   document.querySelector('.message').textContent='❌ You lost the game' ;
//   document.querySelector('.score').textContent=0;
// }
// }

console.log(random);

});

//Button utilities
document.querySelector('.guess').addEventListener( "keypress",function(event){
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector('.check').click();
  }
  else if(event.key=== 'a'){
    event.preventDefault();
    document.querySelector('.again').click();
  }
  if(event.key=== 'r'){
    event.preventDefault();
    document.querySelector('.reset').click();
  }
});

