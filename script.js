'use strict';

const newGame = document.querySelector('.btn--new');
const rollDice = document.querySelector('.btn--roll');
const holdDice = document.querySelector('.btn--hold');
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
const dice = document.querySelector('.dice');

let activePlayer = '0';
let activeScore = 0;

const init = function () {
    activePlayer = 0;
    activeScore = 0;
    score0.textContent = "0";
    score1.textContent = "0";
    currentScore0.textContent = '0';
    currentScore1.textContent = '0';
    player0.classList.add('player--active');
    player1.classList.remove('player--active');
    rollDice.disabled = false;
    holdDice.disabled = false;
}
newGame.addEventListener('click', init);

const switchPlayer = function () {
    activeScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = String(activeScore);
    activePlayer = activePlayer == '1' ? '0' : '1';
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

rollDice.addEventListener('click', function () {
    let randomDice = Math.trunc(Math.random() * 6 + 1);
    dice.src = `dice-${randomDice}.png`;
    if (randomDice !== 1) {
        activeScore += randomDice;
        document.querySelector(`#current--${activePlayer}`).textContent = String(activeScore);
    }
    else {
        switchPlayer();
    }
})

holdDice.addEventListener('click', function () {
    document.querySelector(`#score--${activePlayer}`).textContent = String(Number(document.querySelector(`#score--${activePlayer}`).textContent) + activeScore);
    if (Number(document.querySelector(`#score--${activePlayer}`).textContent) >= 100) {
        document.querySelector('.player--active').style.backgroundColor = '#bf2e34';
        rollDice.disabled = true;
        holdDice.disabled = true;
        document.querySelector(`#name--${activePlayer}`).textContent = 'Winner 🏆'
    } else {
        switchPlayer();
    }
})
