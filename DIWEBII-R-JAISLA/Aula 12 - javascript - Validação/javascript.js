// Declarar os elementos através dos gets e eventos
var email = document.getElementById('email');
var password = document.getElementById('password');
var form = document.getSelector('form');
var textEmail = document.getElementById('textEmail');
var textPassword = document.getElementById('textPassword');
var textForm = document.getElementById('textForm');

function validatorEmail(email) {
    var emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z])$/;
}

function validatorPassword(password) {
    let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{6.16}$/;
}

form.addEventListener("submit", (e) => {
    if (email.value == '' && password.value == '') {
        textForm.texContent = "Você precisa preencher todos os campos!";
    }else if(validatorEmail(email.value) === true && validatorPassword(password.value) === true){
        console.log(email.value);
        console.log(password.value);
        textEmail.textContent = "";
        textPassword.textContent = "";
        textForm.textContent = "";
    }else{
        console.log("Requisição não atendida");
    }
    e.preventDeful()
})