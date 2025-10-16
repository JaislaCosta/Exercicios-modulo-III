// var frutas = ["Abacate", "Abacaxi", "Banana", "Caju", "Manga", "Uva", "Kiwi", "Melancia", "Pera", "Macã"];

// // length -> conya a quantidade de itens do meu array 
// document.write(`A quantidade de frutas é: ${frutas.length}<hr>`);

// // Retorna o primeiro item do meu array 
// document.write(`Primeiro item do meu array: ${frutas[0]}<hr>`);

// // Acessar um item do meu array
// document.write(`Qualquer fruta do meu array: ${frutas[4]}<hr>`); 

// // Acessar o último item do meu array 
// document.write(`Último item do meu array: ${frutas[frutas.length-1]}<hr>`); 

// // Adicionar um item no início do array
// frutas.unshift("Pêssego");

// // Adicionar um item ao final do array
// frutas.push("Morango");

// // Remover um item no início do array
// frutas.shift();

// // Remover um item do final do array 
// frutas.pop();

// // Remover itens a partir da posição até o final 
// frutas.splice(4, 4);

// // Ler um array 
// frutas.forEach(function(item, indice, array){
//     document.write(` ${item} <br> ${indice}`);
// });


// Crie um array chamado carro com 10 itens com PUSH, POP, UNSHIFT, SHIFT, SPLICE 
// Com as funções acima, faça as alterações para cada um 
// Percorra todo o array e retorne os valores atribuidos usando (FOREACH) 

var carro = ["Fox", "Gol", "Uno", "HB20", "Palio", "Onix", "Siena", "CrossFox", "Jetta", "T-Cross"];

carro.push("Logan");
carro.pop();
carro.unshift("Ranger");
carro.shift();
carro.splice(3, 2);

carro.forEach(function( item, indice, array){
document.write(` ${indice} - ${item}<br>`);
});
