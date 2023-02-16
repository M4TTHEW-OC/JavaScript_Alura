  Var 

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);

let 
let forma = 'retângulo'
let altura = 5;
let comprimento = 7;

let area;



if (forma === 'retângulo') {
   area = altura * comprimento
}else{
   (altura * comprimento) / 2;

}
console.log(area);

 const 

const forma = 'triângulo'
const altura = 5;
const comprimento = 7; 
let area;

if (forma === 'quadrado') {
   area = altura * comprimento
}else{
  (altura * comprimento) / 2;
}
  

// boolean 
const usuarioLogado = true 
const contaPaga = false 

// truthy ou falsy
//0  => false
// 1 => true 

console.log(0 == false)
console.log("" == false)
console.log(1 == true)

//undefined

//null => vazio ou nada 
let minhaVar;
let varNull = null;

console.log(minhaVar)
console.log( varNull)

let numero = 3;
let texto = "Alura";

console.log( typeof numero)
console.log( typeof texto)

console.log( typeof minhaVar)
console.log( typeof varNull)


// Conversões 

// Tipo de dado 
// booleanos


// conversão  implícita
const numero =456;
const numeroString = "456";

console.log(numero == numeroString)
console.log(numero + numeroString)


// conversão explícita

// Number () 
// String ()
console.log(numero + Number(numeroString))
