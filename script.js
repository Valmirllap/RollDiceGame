const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const playerScore1 = document.querySelector('#score-1');
const playerScore2 = document.querySelector('#score-2');
const playerCurrent1 = document.getElementById('current-1');
const playerCurrent2 = document.getElementById('current-2');
const btnNew = document.querySelector('.btn-new');
const btnRoll = document.querySelector('.btn-roll');
const btnHold = document.querySelector('.btn-hold');
const dice = document.querySelector('.dice');
  
let globalScore, currentScore, activePlayer, playing;

const init = function () {
  playerScore1.textContent = 0;
  playerScore2.textContent = 0;
  dice.classList.add("hidden");
  globalScore = [0, 0];
  currentScore = 0;
  activePlayer = 1;
  playing = true;


  playerCurrent1.textContent = 0;
  playerCurrent2.textContent = 0;
  
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
}
init();

const nextPlayer = function () {
  document.getElementById(`current-${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 1 ? 2 : 1;
  currentScore = 0;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
}

btnRoll.addEventListener('click', function () {
  
})

