const name = document.getElementById('name');

const email = document.getElementById('email');

const phone = document.getElementById('phone');

const comment = document.getElementById('comment');

const form = document.getElementById('form');

const name_error = document.getElementById('name_error');

const email_error = document.getElementById('email_error');


form.addEventListener('submit', (e) =>
{
    var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (name.value === '') {
        e.preventDefault();
        name_error.innerHTML = "Name is required";
    }
    else {
        name_error.innerHTML = "";
    }
    if (!email.value.match(email_check)) {
        e.preventDefault();
        email_error.innerHTML = "Email is required";

    }
    else {
        email_error.innerHTML = "";
    }

})




