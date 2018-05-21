var symbol = 'X';

function move(id) {



  var col = document.getElementById(id);

  if(col.innerHTML === '') {
    col.innerHTML = symbol;

    col.style.color = 'white';

    if(symbol === 'O') {
      col.style.backgroundColor = 'red';
      symbol = 'X';
    } else {
      col.style.backgroundColor = 'green';
      symbol = 'O';
    }
  }

  checkWinner();
}

function checkWinner() {
  var col11 = document.getElementById('col11');
  var col12 = document.getElementById('col12');
  var col13 = document.getElementById('col13');

  if(col11.innerHTML === col12.innerHTML && col12.innerHTML === col13.innerHTML) {
    console.log(col11.innerHTML + ' is the winner!!!!');
  }
}
