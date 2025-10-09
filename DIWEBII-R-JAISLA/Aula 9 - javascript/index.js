// console.log('Jaisla Costa Barbosa');
// console.log('Jaisla "Costa" "Barbosa"');
// console.log(`Jaisla "Costa" 'Barbosa'`);
// console.log(123456789);

// console.log(`Meu nome é "Jaísla", estou aprendendo javascript agora, e são exatamente 20:09, 'da noite'`);

// Tipos de variáveis
// var - está em desuso
// let nome = 'João';
// let nome1 = 'Maria';
// let nome2 = "Eduardo";

// let data1 = 1984;
// let data2 = 2000;
// let data3 = 2012;
// let data4 = 2015;

// console.log(`${nome}, nasceu em ${data1} .`);
// console.log(`Em ${data2} , ${nome} conheceu ${nome1} .`);
// console.log(`${nome} casou-se com ${nome1} em ${data3} .`);
// console.log(`${nome1} teve 1 filho com ${nome} em ${data4} .`);
// console.log(`O filho de ${nome} se chama ${nome2} .`);

// const



// Tipos de dados
// string - são um conjunto de caracteres que formam palavras que formam textos
// Ex: let nome = 'Jaísla';
// number - valores numéricos / numeros inteiros ou pontos flutuantes com casas decimais.
// Ex: 
// boolean - representação lógica - verdadeiro ou falso
// Ex: const valor = false; true or false
// BigInt - representa numeros inteiros com valores muito altos
// Ex:
// undefined - um valor na variável que não foi declarado
// let valor;
// null - representa uma variável que não tem valor ou que foi esvaziada
// Ex:


// (Jaísla Costa Barbosa tem 20 anos,)
// (pesa 57kg, tem 1.60 de altura e seu)
// (IMC é de 22.2)
// (Jaísla Costa Barbosa nasceu em ----)

// const nome = 'Jaísla';
// const sobreNome = ' Costa Barbosa ';
// const idade = 20;
// const peso = 57;
// const altura = 1.60;
// let imc; //peso / (altura * altura)
// let dataNascimento;

// imc = peso / (altura * altura);
// console.log(imc);
// dataNascimento = 2025 - idade
// console.log(dataNascimento);

// console.log(`${nome} ${sobreNome} tem  ${idade}  anos`);
// console.log(`e pesa  ${peso}  kg`);

// var nome_aluno = 'Jaísla';
// var idade = 20;
// var curso = 'TI';

// document.write(`A aluna ${nome_aluno}, tem ${idade} anos e cursa a disciplina ${curso}.`);



// Operações
// var numeroUm = 10;
// var numeroDois = 5;

// var soma = numeroUm + numeroDois;
// document.write(`O valor da soma é: ${soma} <br>`);

// var subtracao = numeroUm - numeroDois;
// document.write(`O valor da subtração é: ${subtracao} <br>`);

// var divisao = numeroUm / numeroDois;
// document.write(`O valor da divisão é: ${divisao} <br>`);

// var multiplicacao = numeroUm * numeroDois;
// document.write(`O valor da multiplicação é: ${multiplicacao} <br>`);

// var restoDivisao = numeroUm % numeroDois;
// document.write(`O valor da operação é: ${restoDivisao}`);



// Operações de comparação
// == -> igual a
// != -> diferente de
// < -> menor que
// > -> maior que
// <= -> menor ou igual a que 
// >= -> maior ou igual a que 

// document.write("<h3>Operador de compareção: igual a</h3>.")
// var valor1 = 9;
// var valor2 = 9;

// if (valor1 == valor2) 
// {
//    document.write(`${valor1} é igual a ${valor2}.`); 
// }else
// {
//     document.write(`${valor1} é diferente de ${valor2}.`);
// }

// document.write("<h3>Operador de compareção: diferente de</h3>.")
// var valor1 = 9;
// var valor2 = 8;

// if (valor1 != valor2) 
// {
//    document.write(`${valor1} é diferente de ${valor2}.`); 
// }else
// {
//     document.write(`${valor1} é igual a ${valor2}.`);
// }

// document.write("<h3>Operador de compareção: menor que</h3>.")
// var valor1 = 7;
// var valor2 = 8;

// if (valor1 < valor2) 
// {
//    document.write(`${valor1} é menor que ${valor2}.`); 
// }else
// {
//     document.write(`${valor1} é maior que ${valor2}.`);
// }

// document.write("<h3>Operador de compareção: menor ou igual a que</h3>.")
// var valor1 = 9;
// var valor2 = 8;

// if (valor1 <= valor2) 
// {
//    document.write(`${valor1} é menor ou igual a ${valor2}.`); 
// }else
// {
//     document.write(`${valor1} é maior que ${valor2}.`);
// }

// document.write("<h3>Operador de compareção: maior ou igual a que</h3>.")
// var valor1 = 9;
// var valor2 = 8;

// if (valor1 >= valor2) 
// {
//    document.write(`${valor1} é maior ou igual a ${valor2}.`); 
// }else
// {
//     document.write(`${valor1} é menor que ${valor2}.`);
// }



// Operações lógicas
// && -> e/and
// || -> ou/or
// ! -> não/not

// document.write('<h4>Operador lógico: &&(e)</h4>');
// var nota = 8;
// var faltas = 25;

// if ((nota >= 5) && (faltas < 20)) {
//     document.write('<h4>Operador lógico: &&(e)</h4>Aprovado!!');
// }else{
//     document.write('Reprovado!!');
// }


// if ((nota >= 5) || (faltas < 20)) {
//     document.write('<h4>Operador lógico: ||(ou)</h4>Aprovado!!');
// }else{
//     document.write('Reprovado!!<br>');
// }

// var situacao = !true;
//     document.write(`<h4>Operador lógico: !(não)</h4>${situacao}`);



// Operações de incremento e decremento
// ++ -> incremento
// -- -> decremento

// var qtePessoa = 0;
// qtePessoa ++;
// document.writeln(`Quantidade de pessoas que passam pela porta giratória: ${qtePessoa} <br>`);

// var qtePessoaShow = 5000;
// qtePessoaShow --;
// document.write(`Quantidade de lugares disponíveis: ${qtePessoaShow}`);



// Funções
// function nome_funcao(){
//    alert('Login e senha incorretos'); 
// }

// function soma(a, b) {
//     var total = a + b;
//     alert(`O valor da soma é: ${total}`);
// }

// function desconto(a, b){
//     var totalDesc = a - b;
//     return totalDesc;
// document.write(`Valor final com desconto: R$  ${totalDesc}`);
// }
// var resultadoDesc = desconto(10, 3);
// document.write(`Valor final com desconto: R$ ${resultadoDesc}`)



// Estrutura condicionais - if - else / else-if
// var nota = 2;

// if (nota >= 6) {
//     document.write(`Nota: ${nota} Parabéns!!! Você foi aprovado...`);
// }else if((nota >= 4) && (nota < 6)){
//     document.write(`Nota: ${nota} Mais ou menos...Você está de recuperação...vai ter que me aguentar mais um pouco`);
// }else{
//     document.write(`${nota} Não foi dessa vez...volte semestre que vem...Reprovado!!!`);
// }


// var sol = false;
// var chuva = true;

// if (sol) {
//     document.write('Tempo ensolarado...Vamos a praia...');
// }else if(chuva){
//     document.write('Tempo chuvoso. Risco de raios...RISCO DE TEMPESTADES!!! Ficaremos em casa mesmo.');
// }else{
//     document.write('Tempo com o céu limpo...Vamos ao parque!!');
// }


// Switch-case 
// var key = 1;

// switch (key) {
//     case 1:
//         document.write(`Chave: ${key} - Chave do apartamento`);
//         break;
//     case 2:
//         document.write(`Chave: ${key} - Chave da casa`);
//         break;
//     case 3:
//         document.write(`Chave: ${key} - Chave da sala comercial`);
//     case 4:
//         document.write(`Chave: ${key} - Chave do carro`);
//         break;
//     default:
//         document.write(`Chave: ${key} - Chave não correpondente com nenhum tipo de uso`);
//         break;
// }


// While 
var inicio = 1;
while(inicio <= 10){
    document.write(`Número do cliente: ${inicio}<br>`);
    inicio++;
}