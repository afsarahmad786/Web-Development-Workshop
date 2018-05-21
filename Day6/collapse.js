var button = document.getElementById('toggle');

button.onclick = function () {
  var content = document.getElementById('myContent');

  if(content.className === 'open') {
    content.className = '';
    this.innerHTML = 'Show More';
  } else {
    content.className = 'open';
    this.innerHTML = 'Show Less';
  }
}
