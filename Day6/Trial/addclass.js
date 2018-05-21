window.onload = function () {
  var button = document.getElementsByTagName('button')[0];

  button.onclick = toggle;
}

function toggle() {
  var contents = document.getElementById('contents');

  if(contents.className === '') {
    contents.className = 'open';
    this.innerHTML = 'Show Less';
  } else {
    contents.className = '';
    this.innerHTML = 'Show More';
  }

}
