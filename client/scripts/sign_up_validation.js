const fname = document.getElementsByClassName('fname');
const form = document.getElementById('form');
const submit = document.getElementById('sign-up');

document.querySelector('.btn-sign-up').addEventListener('click', function(){
    if (document.getElementById('fname').value.length == 0){
        document.querySelector('.fname-error-text').style.visibility = 'visible';
        document.querySelector('.fname-error-text').innerHTML = "First name cannot be blank";
        document.querySelector('.fname').style.border = '2px solid #f53b57';
    } else {
        document.querySelector('.fname').style.border = '2px solid #10ac84';
        document.querySelector('.fname-error-text').style.visibility = 'hidden';
    }

    if (document.getElementById('lname').value.length == 0){
        document.querySelector('.lname-error-text').style.visibility = 'visible';
        document.querySelector('.lname-error-text').innerHTML = "Last name cannot be blank";
        document.querySelector('.lname').style.border = '2px solid #f53b57';
    } else {
        document.querySelector('.lname').style.border = '2px solid #10ac84';
        document.querySelector('.lname-error-text').style.visibility = 'hidden';
    }

    if (document.getElementById('email').value.length == 0){
        document.querySelector('.email-error-text').style.visibility = 'visible';
        document.querySelector('.email-error-text').innerHTML = "Email cannot be blank";
        document.querySelector('.email').style.border = '2px solid #f53b57';
    } else {
        document.querySelector('.email').style.border = '2px solid #10ac84';
        document.querySelector('.email-error-text').style.visibility = 'hidden';
    }

    if(document.querySelector('.password').value.length >= 8) {
        document.querySelector('.password').style.border = '2px solid #10ac84';
        document.querySelector('.password-error-text').style.visibility = 'hidden';
      } else {
        document.querySelector('.password-error-text').style.visibility = 'visible';
        document.querySelector('.password-error-text').innerHTML = "Password must be at least 8 characters";
        document.querySelector('.password').style.border = '2px solid #f53b57';
      }
      
    if(document.querySelector('.password2').value === document.querySelector('.password').value && document.querySelector('.password2').value.length > 0) {
        document.querySelector('.password2').style.border = '2px solid #10ac84';
        document.querySelector('.password2-error-text').style.visibility = 'hidden';
      } else {
        document.querySelector('.password2-error-text').style.visibility = 'visible';
        document.querySelector('.password2-error-text').innerHTML = "Passwords must match";
        document.querySelector('.password2').style.border = '2px solid #f53b57';
      }
});
