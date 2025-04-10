const p1Display = document.querySelector('#display-p1-score');
const p2Display = document.querySelector('#display-p2-score');
const p1PlusButton = document.querySelector('#button-p1-plus');
const p2PlusButton = document.querySelector('#button-p2-plus');
const p1MinButton = document.querySelector('#button-p1-min');
const p2MinButton = document.querySelector('#button-p2-min');
const resetButton = document.querySelector('#reset');
const winPointInput = document.querySelector('#win-point');
const buttonWinPoint = document.querySelector('#button-apply-point');
const displayWinPoint = document.querySelector('#display-win-point');
const winner = document.querySelector('#winner');
const player1 = document.querySelector('#player1');
const player2 = document.querySelector('#player2');

let p1Score = 0;
let p2Score = 0;
let winPoint = 5;
let isGameOver = false;

p1PlusButton.addEventListener('click', function(){
    if(!isGameOver){
        p1Score += 1;
        if(p1Score === winPoint){
            isGameOver = true;
            const namaPlayer1 = player1.textContent;
            setTimeout(() =>{
                winner.textContent = `${namaPlayer1.toUpperCase()} IS THE WINNER!!`; //memberikan nama
            })     
        }
        p1Display.textContent = p1Score;
    }
})

p1MinButton.addEventListener('click', function(){
    if(!isGameOver && p1Score > 0){
        p1Score -= 1;
        p1Display.textContent = p1Score;
    }
})

p2PlusButton.addEventListener('click', function(){
    if(!isGameOver){
        p2Score += 1;
        if(p2Score === winPoint){
            isGameOver = true;
            const namaPlayer2 = player2.textContent;
            setTimeout(() =>{
                winner.textContent = `${namaPlayer2.toUpperCase()} IS THE WINNER!!`;
            })
        }
        p2Display.textContent = p2Score;
    }
})

p2MinButton.addEventListener('click', function(){
    if(!isGameOver && p2Score > 0){
        p2Score -= 1;
        p2Display.textContent = p2Score;
    }
})


function reset(){
        p1Score = 0;
        p2Score = 0;
        winPoint = 5;
        p1Display.textContent = p1Score; 
        p2Display.textContent = p2Score; 
        isGameOver = false;
        winPointInput.value = null;
        displayWinPoint.textContent = winPoint;
        winner.textContent = '';
        player1.textContent = 'Player 1';
        player2.textContent = 'Player 2';
}

resetButton.addEventListener('click', reset)

buttonWinPoint.addEventListener('click', function(){
    winPoint = parseInt(winPointInput.value);
    winPointInput.value = null;
    if (p1Score > 0 || p2Score > 0) {
        p1Score = 0;
        p2Score = 0;
        isGameOver = false;
        p1Display.textContent = p1Score;
        p2Display.textContent = p2Score;
    }
    displayWinPoint.textContent = winPoint;

})