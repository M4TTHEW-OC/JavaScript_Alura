 let x = "";
 console.log(x)
 x = "oi";



//DECLARAÇÃO DE FUNÇÃO

//1) declara a função
                        // 4 -> valor da soma()
function imprimeTexto (texto) {
    console.log(texto)
}

//2) executa a função (1 ou + vezes)

imprimeTexto(soma())
imprimeTexto("outro texto")

// três formas de escrever funções 

function soma (){
    //outros códigos 
    //vários consoles.log
    //Apos o return nada séra executado     
    return  2 + 2; 
}

console.log(soma())
