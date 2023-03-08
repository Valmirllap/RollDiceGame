const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const playerScore1 = document.querySelector('#score-0');
const playerScore2 = document.querySelector('#score-1');
const playerCurrent1 = document.getElementById('current-0');
const playerCurrent2 = document.getElementById('current-1');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const diceRoll = document.querySelector('.dice');
  
let globalScore, currentScore, activePlayer, playing;

const newGame = function () {
  playerScore1.textContent = 0;
  playerScore2.textContent = 0;
  diceRoll.classList.add("hidden");
  globalScore = [0,0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  playerCurrent1.textContent = 0;
  playerCurrent2.textContent = 0;
  player1.classList.remove('winner');
  player2.classList.remove('winner')
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
}
newGame();

const nextPlayer = function () {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  if(playing){
    const dice = Math.floor(Math.random() * 6) + 1;
    diceRoll.classList.remove('hidden');
    diceRoll.src = `./dice-${dice}.png`;
    
    if(dice !== 1){
      currentScore += dice;
      document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    } else {
      nextPlayer();
    }
  }
});

btnHold.addEventListener(`click`, function () {
  if(playing) {
    globalScore[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent = globalScore[activePlayer];
    if (globalScore[activePlayer] >= 100){
      playing = false
      document.querySelector(`.player--${activePlayer}`).classList.add('winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('.player--active');
      diceRoll.classList.add('hidden');
    }
    nextPlayer();
  }
}) 

btnNew.addEventListener('click', newGame);

