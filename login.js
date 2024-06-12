const title = document.querySelector('.title');
const inputch = document.querySelector('.input_chang');
const password = document.querySelector('.Password');
const signup = document.querySelector('.signup');
const signin = document.querySelector('.signin');
const namefield = document.querySelector('.namefield');
const line = document.querySelector('.underline');
const message = document.querySelector('.message');
const email = document.querySelector('.email');
const fullname = document.querySelector('.fullname');
const forgot = document.querySelector('.click')

signin.addEventListener('click', (e) => {
    e.preventDefault()
    namefield.style.maxHeight = '0';
    title.innerHTML = 'Sign In';
    signup.classList.add('disabled');
    signin.classList.remove('disabled');
    line.style.transform = 'translateX(35px)';
    forgot.style.display = 'Block'

    message.innerHTML = '';
    message.style.color = '';

});

signup.addEventListener('click', (e) => {
    e.preventDefault()
    namefield.style.maxHeight = '60px';
    title.innerHTML = 'Sign Up';
    signin.classList.add('disabled');
    signup.classList.remove('disabled');
    forgot.style.display = 'none'
    para.innerHTML = '';
    line.style.transform = 'translateX(5px)';
    message.innerHTML = '';
    message.style.color = '';

    //null conditions

    if (fullname.value == "" || fullname.value == null) {
        e.preventDefault()
        message.innerHTML = "Name is Required";
        message.style.color = 'red';
    } else if (email.value == "" || email.value == null) {
        e.preventDefault()
        message.innerHTML = "Email is Required";
        message.style.color = 'red';
    } else if (password.value == "" || password.value == null) {
        message.innerHTML = "Password is Required";
        message.style.color = 'red';
    }

});

//Password Strength 
password.addEventListener('keyup', (e) => {
    e.preventDefault()
    if (!signup.classList.contains('disabled')) {
        const data = password.value;
        console.log(data);
        if (data.length < 8) {
            message.innerHTML = 'Use Minimum 8 Letters';
            message.style.color = 'red';
        } else if (data.search(/[A-Z]/) == -1) {
            message.innerHTML = 'Use one Capital Letter';
            message.style.color = 'red';
        } else if (data.search(/[!@#$%^&*()_+]/) == -1) {
            message.innerHTML = 'Use One Special Letter';
            message.style.color = 'red';
        } else {
            message.innerHTML = 'Now Password is strong';
            message.style.color = 'green';
        }
    } else {
        message.innerHTML = '';
        message.style.color = '';
    }
});