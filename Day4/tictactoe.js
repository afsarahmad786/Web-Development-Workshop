var symbol = 'X';

function move(id) {
  var col = document.getElementById(id);

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
