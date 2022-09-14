/* Declare e chame as funções abaixo:

a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado. */

function doisNumeros(numero1, numero2){
    console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`)
}
    
doisNumeros(+prompt("diga um numero"), +prompt("diga outro numero"))


/*
b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo. */

 function retornaBooleano(num1, num2){
    console.log(`${num1} é maior ou igual que ${num2}? ${num1>=num2}`)
 } 

 retornaBooleano(+prompt("Digite um numero!"), +prompt("digite outro numero!"))

//c) Uma função que receba um número e imprima se ele é par ou não

function numPar(num3){
    if(num3%2 === 0){
    console.log(`O numero ${num3} é par`)}
    else{
        console.log(`o numero ${num3} é impar`)
    }
}

numPar(+prompt("Digite um numero!"))

//d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras ma12iúsculas.

function funcaoString(string){
    console.log(`Esta mensagem tem, ${string.length}, caracteres!`)
    console.log(string.toLocaleUpperCase())
    
}

funcaoString(prompt("Digite um mensage!"))