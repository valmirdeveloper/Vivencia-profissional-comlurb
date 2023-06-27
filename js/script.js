
//Selecionar o elemento pelo id //
var nome = document.getElementById("nome");
var botao = document.getElementById("botao-enviar"); 


     //             Formulário sexo            //


    botao.addEventListener("click", (e) => {  //Atribuir evento de click ao elemmento botao//
        if(document.getElementById("feminino").checked){ //Se o elemento input type radio "feminino" for checado//
            sexo = "menina"; //faça isso//
            prefixo = "uma"; //faça isso//

        }else if(document.getElementById("masculino").checked){ //Se não se, o elemento input type radio "masculino" for checado//
            sexo = "menino"; //faça isso//
            prefixo = "um";  //faça isso//      
        }

        document.getElementById("mensagem").innerHTML = `Olá ${nome.value}, você é ${prefixo} ${sexo}.`  //Template string //
    })


        //        Caixas coloridas      //

    var caixas = document.getElementById("#caixaVermelha");
    var input = document.getElementById("#checkboxVermelho");

    checkboxVermelho.addEventListener("click", (e) => {
        if(document.getElementById("checkboxVermelho").checked){ 

            document.getElementById("caixaVermelha").style.backgroundColor = "red";

        }else {

            document.getElementById("caixaVermelha").style.backgroundColor = "rgb(197, 189, 189)";
        }                    
    })



    var caixas = document.getElementById("#caixaAzul");
    var input = document.getElementById("#checkboxAzul");

    checkboxAzul.addEventListener("click", (e) => {
        if(document.getElementById("checkboxAzul").checked){ 

            document.getElementById("caixaAzul").style.backgroundColor = "cyan";

        }else {

            document.getElementById("caixaAzul").style.backgroundColor = "rgb(197, 189, 189)";
        }                     
    })



    var caixas= document.getElementById("#caixaAmarela");
    var input = document.getElementById("#checkboxAmarelo");

    checkboxAmarelo.addEventListener("click", (e) => {
        if(document.getElementById("checkboxAmarelo").checked){ 

            document.getElementById("caixaAmarela").style.backgroundColor = "yellow";

        }else {

            document.getElementById("caixaAmarela").style.backgroundColor = "rgb(197, 189, 189)";
        }                    
    })



    var caixas = document.getElementById("#caixaVerde");
    var input = document.getElementById("#checkboxVerde");

    checkboxVerde.addEventListener("click", (e) => {
        if(document.getElementById("checkboxVerde").checked){ 

            document.getElementById("caixaVerde").style.backgroundColor = "#15FF2C";

        }else {

            document.getElementById("caixaVerde").style.backgroundColor = "rgb(197, 189, 189)";
        }                    
    })



    var caixas = document.getElementById("#caixaBranca");
    var input = document.getElementById("#checkboxBranco");

    checkboxBranco.addEventListener("click", (e) => {
        if(document.getElementById("checkboxBranco").checked){ 

            document.getElementById("caixaBranca").style.backgroundColor = "white";

        }else {

            document.getElementById("caixaBranca").style.backgroundColor = "rgb(197, 189, 189)";
        }                    
    })



    var caixas = document.getElementById("#caixaPreta");
    var input = document.getElementById("#checkboxPreto");

    checkboxPreto.addEventListener("click", (e) => {
        if(document.getElementById("checkboxPreto").checked){ 

            document.getElementById("caixaPreta").style.backgroundColor = "black";

        }else {

            document.getElementById("caixaPreta").style.backgroundColor = "rgb(197, 189, 189)";
        }                    
    })






   
   
