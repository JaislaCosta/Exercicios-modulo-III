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

const nome = 'Jaísla';
const sobreNome = ' Costa Barbosa ';
const idade = 20;
const peso = 57;
const altura = 1.60;
let imc; //peso / (altura * altura)
let dataNascimento;

imc = peso / (altura * altura);
console.log(imc);
dataNascimento = 2025 - idade
console.log(dataNascimento);

console.log(`${nome} ${sobreNome} tem  ${idade}  anos`);
console.log(`e pesa  ${peso}  kg`);