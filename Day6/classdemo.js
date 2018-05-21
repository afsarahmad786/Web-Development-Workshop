var button = document.getElementById('myButton');

button.onclick = function () {
  var div = document.getElementById('myDiv');

  if(div.className === 'redbg') {
    div.className = 'bluebg';
  } else {
    div.className = 'redbg';
  }
  // if(div.style.backgroundColor === 'blue') {
  //     div.style.backgroundColor = 'red';
  // } else {
  //   div.style.backgroundColor = 'blue';
  // }
}
