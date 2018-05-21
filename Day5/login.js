function validate() {
  var username = document.getElementById('username');
  var password = document.getElementById('password');

  var flag = true;

  if(username.value === '') {
    var errUsername = document.getElementById('err-username');
    errUsername.style.visibility = 'visible';
    flag = false;
  }

  if(password.value === '') {
    var errPassword = document.getElementById('err-password');
    errPassword.style.visibility = 'visible';
    flag = false;
  }

  return flag;
}

function hideUsernameError() {
  var errUsername = document.getElementById('err-username');
  errUsername.style.visibility = 'hidden';
}

function hidePasswordError() {
  var errPassword = document.getElementById('err-password');
  errPassword.style.visibility = 'hidden';
}
