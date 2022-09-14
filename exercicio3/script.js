function soma(num1, num2){
    return num1 + num2
}

function subtracao(num1, num2){
    return num1 - num2
}

function multiplicação(num1, num2) {
    return num1 * num2
}

function divisão(num1, num2){
    return num1 / num2
}

num1 = +prompt("Insira um numero!")
num2 = +prompt("Insira mais um numero!")

console.log(`A Soma é = ${soma(num1, num2)}`,`a subtracao é = ${subtracao(num1, num2)}`,`a multiplicação é = ${multiplicação(num1, num2)}`,`e a divisão é ${divisão(num1, num2)}`)
