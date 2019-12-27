 /*
 GAME FUNCTIONS:
 -Player must guess a number between a min and max
 -Player gets a certain amount of guesses
 -Notify player of guesses remaining
 -Notify the player of the correct answer if loose
 -let player choose to play again
 */

 //Game Values
 let min=1,max=10,winningNum=getRandomNum(min,max),guessesLeft=3; 
 //UI elements
 const game=document.querySelector('#game'),
        minNum=document.querySelector('.min-num'),
        maxNum=document.querySelector('.max-num'),
        guessBtn=document.querySelector('#guess-btn'),
        guessInput=document.querySelector("#guess-input"),
        message=document.querySelector('.message');
//Assign UI min and max
minNum.textContent=min;
maxNum.textContent=max;  

//Play Again event listener
game.addEventListener('mousedown',function(event){
if(event.target.className==='play-again')
window.location.reload();
});
//Listen for guess
guessBtn.addEventListener('click',function(){//console.log(Math.random()*(20-10+1));
    let guess=parseInt(guessInput.value);
    //Validate
    if(isNaN(guess) || guess<min || guess>max)
    {
        setMessage(`Please enter a number between ${min} and ${max}`,'green');
    }
    //check if won
    if(guess==winningNum)
    {
        //GameOver Won
        //Disable Input
        guessInput.disabled=true;
        //change borber color
        guessInput.style.borderColor='green';
        //set message
        setMessage(`${winningNum} is correct, YOU WIN!`,'green');
        guessBtn.value='Play Again';guessBtn.className='play-again';
    }
    else
    {
        //wrong number
        guessesLeft-=1;
        if(guessesLeft===0)
        {
            //GameOver -lost
            guessInput.disabled=true;
            //change borber color
            guessInput.style.borderColor='red';
            //set message
            setMessage(`Game Over,you LOST. The correct number was ${winningNum}`,'red');
            guessBtn.value='Play Again';guessBtn.className='play-again';
        }
        else
        {
            guessInput.style.borderColor='red';
            guessInput.value="";
            //Game Continues - answer wrong
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');
        }
    }
});

//Set Message
function setMessage(msg,color) 
{
    message.style.color=color;
    message.textContent=msg;
}
//get winning number
function getRandomNum(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}