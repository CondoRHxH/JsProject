
let title = document.querySelector('.title');
let turn = 'X';

function game(id){
    let element = document.getElementById(id);

    if(turn === 'X' && element.innerHTML == ''){

        element.innerHTML = 'X';
        turn = 'O';
        title.innerHTML = 'O';

    }
    else if (turn === 'O' && element.innerHTML == ''){
        element.innerHTML = 'O';
        turn = 'X';
        title.innerHTML = 'X';
    }
}