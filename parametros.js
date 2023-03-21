// Parâmetros de função



/              //2     //2
function soma (num1, num2){
    return num1 + num2;
}

console.log(soma(-600, 2))
console.log(soma(2, 587))
console.log(soma(997, 2))

// Parâmetros x Argumentos

// Ordens dos parâmetros 

function nomeIdade(nome, idade){
    return`meu nome é ${nome} e minha idade é ${idade}`
}
console.log(nomeIdade ("Matheus", 20))

function multiplica(numero1 = 1, numero2 = 1){
    return numero1 * numero2;
}
                             //9        //6
console.log(multiplica(soma(4, 5), soma(3, 3)))
console.log(multiplica(soma(4, 5)))