<?php
//Exercício de estrutura de condição: if else

/*$idade = 18;

if ($idade >= 18) {
        echo "Você é maior de idade";
}else if($idade > 0){
        echo "Você é menor de idade";
}else {
        echo "Idade inválida. Digite uma idade válida!";
}
*/

//Operador ternário em php
$idade = 17;

echo ($idade >= 18) ? "Você é maior de idade" : (($idade > 0 && $idade <18)
? "Você é menor de idade"
: "Idade inválida. Digite uma idade válida!");

//Outra forma de escrever mesclando as duas

$idade = 17;

if ($idade <= 0) {
        echo "Idade inválida. Digite uma idade válida!";
}else {
        echo ($idade >= 18) ? "Você é maior de idade" : "Você é menor de idade";
}

