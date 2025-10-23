// // Declarar os elementos através dos gets e eventos
// var email = document.getElementById('email');
// var password = document.getElementById('password');
// var form = document.getSelector('form');
// var textEmail = document.getElementById('textEmail');
// var textPassword = document.getElementById('textPassword');
// var textForm = document.getElementById('textForm');

// //------------------------------------------------------------------------------------------------
// // Funções de validação 
// function validatorEmail(email) {
//     var emailPattern = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]){2, 4}$/;
//     return emailPattern.test(email)
// }

// function validatorPassword(password) {
//     let passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-z0-9!@#$%^&*]{6, 16}$/;
//     return passwordPattern.test(password)
// }

// //------------------------------------------------------------------------------------------------
// // Eventos de Listener no form
// form.addEventListener("submit", (e) => {
//     if (email.value == '' && password.value == '') {
//         textForm.texContent = "Você precisa preencher todos os campos!";
//     }else if(validatorEmail(email.value) === true && validatorPassword(password.value) === true){
//         console.log(email.value);
//         console.log(password.value);
//         textEmail.textContent = "";
//         textPassword.textContent = "";
//         textForm.textContent = "";
//     }else{
//         console.log("Requisição não atendida");
//     }
//     e.preventDeful()
// })

// email.addEventListener("keyup", () => {
//     if (validatorEmail(email.value) !== true){
//       textEmail.textContent = "O formato do email deve ser 'abc@.com'"  
//     }else{
//         textEmail.textContent = '';
//     }
// })

// password.addEventListener("keyup", () => {
//     if (validatorPassword(password.value) !== true){
//         textPassword.textContent = "O formato deve ter no mínimo 6 caracteres"
//     }else{
//         textPassword.textContent = "";
//     }
// })


// Validação de CPF

// CPF: 123.456.789-36

const validaCPF = (cpf) => {
    cpf = cpf.replace(/\D/g, '')

    if(cpf.length !== 11){
    console.error('CPF INVÁLIDO. dOCUMENTO NÃO POSSUI 11 CARACTERES.!')
    return
    }

    const proximoDigitoVerificador = (cpfIncompleto) => {
        let somatoria = 0

        for (let i = 0; i < cpf.length; i++) {
            let digitoAtual = cpfIncompleto.chatAt(i);
            console.log(digitoAtual);
            let constante = cpfIncompleto.length + 1 - 1
        }
    }

    let primeiroDigito = proximoDigitoVerificador(cpf.substring(0,9));
    console.log(cpf)
}
validaCPF("123.456.789-")