/* # Exercício 1

/* a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função. */

/*function minhafunction(){
    console.log(prompt("diga seu nome!"))
}
minhafunction() 
/* 
b) Declare uma função que imprima a tabuada do 6. Chame esta função. */

/* function minhaTabuada(){
    let tabuada = +prompt("Digite um numero!")
    for(let i = 0; i < 11; i++){
        console.log(6 * tabuada)
    } 

}
minhaTabuada() */

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 





const minhaTabuada1 = (tabuada) =>{
   
    for(let i = 0; i < 11; i++){
        console.log(`${i} x ${tabuada} = ${i*tabuada}`)}
    }
    
minhaTabuada1(6)
