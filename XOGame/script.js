let title = document.querySelector('.title');
let turn = 'X';
let squares = [];
let gameOver = false; // 🛑 هادي جديدة

function winning(num1, num2, num3) {
  title.innerHTML = `${squares[num1]} Winner 🎉`;
  document.getElementById('item' + num1).style.backgroundColor = '#0f0';
  document.getElementById('item' + num2).style.backgroundColor = '#0f0';
  document.getElementById('item' + num3).style.backgroundColor = '#0f0';

  gameOver = true; // ⛔ منع اللعب من بعد الفوز

  let interval = setInterval(() => {
    title.innerHTML += '.';
  }, 500);

  setTimeout(() => {
    clearInterval(interval);
    location.reload();
  }, 4000);
}

function winner() {
  for (let i = 1; i <= 9; i++) {
    squares[i] = document.getElementById('item' + i).innerHTML;
  }

  if (squares[1] === squares[2] && squares[2] === squares[3] && squares[1] !== '') {
    winning(1, 2, 3);
  } else if (squares[4] === squares[5] && squares[5] === squares[6] && squares[4] !== '') {
    winning(4, 5, 6);
  } else if (squares[7] === squares[8] && squares[8] === squares[9] && squares[7] !== '') {
    winning(7, 8, 9);
  } else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[1] !== '') {
    winning(1, 4, 7);
  } else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[2] !== '') {
    winning(2, 5, 8);
  } else if (squares[3] === squares[6] && squares[6] === squares[9] && squares[3] !== '') {
    winning(3, 6, 9);
  } else if (squares[1] === squares[5] && squares[5] === squares[9] && squares[1] !== '') {
    winning(1, 5, 9);
  } else if (squares[3] === squares[5] && squares[5] === squares[7] && squares[3] !== '') {
    winning(3, 5, 7);
  }
}

function game(id) {  //Work every time we click
  if (gameOver) return; // Not letting anyone play if the game is over 

  let element = document.getElementById(id);

  if (element.innerHTML === '') {
    element.innerHTML = turn;
    turn = (turn === 'X') ? 'O' : 'X';
    title.innerHTML = turn;
    winner();
  }
}
 