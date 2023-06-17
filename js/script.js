var nome = document.getElementById("nome");
var botao = document.querySelector("#botao-enviar");






    botao.addEventListener("click", (e) => {
        if(document.getElementById("feminino").checked){
            sexo = "menina";
            prefixo = "uma";

        }else if(document.getElementById("masculino").checked){
            sexo = "menino";
            prefixo = "um";  
       
        }

        document.getElementById("mensagem").innerHTML = "Olá " + nome.value + ", " + "você é " + prefixo +" " + sexo + "?";
    })


   