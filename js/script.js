var nome = document.getElementById("nome");
var botao = document.querySelector("#botao-enviar");


     //             Formulário sexo            //


    botao.addEventListener("click", (e) => {
        if(document.getElementById("feminino").checked){
            sexo = "menina";
            prefixo = "uma";

        }else if(document.getElementById("masculino").checked){
            sexo = "menino";
            prefixo = "um";  
       
        }

        document.getElementById("mensagem").innerHTML = "Olá " + nome.value + ", " + "você é " + prefixo +" " + sexo + "!";
    })


        //        Caixas coloridas      //

    var caixaVermelha = document.getElementById("#caixaVermelha");
    var input = document.getElementById("#checkboxVermelho");

    checkboxVermelho.addEventListener("click", (e) => {
        if(document.getElementById("checkboxVermelho").checked){ 

            document.getElementById("caixaVermelha").style.backgroundColor = "red";

        }else {

            document.getElementById("caixaVermelha").style.backgroundColor = "rgb(197, 189, 189)";
        }            
         
    })



    var caixaAzul = document.getElementById("#caixaAzul");
    var input = document.getElementById("#checkboxAzul");

    checkboxAzul.addEventListener("click", (e) => {
        if(document.getElementById("checkboxAzul").checked){ 

            document.getElementById("caixaAzul").style.backgroundColor = "blue";

        }else {

            document.getElementById("caixaAzul").style.backgroundColor = "rgb(197, 189, 189)";
        }            
         
    })
   
   
