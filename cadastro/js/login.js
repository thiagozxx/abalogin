function verifica(){
    /*  */
    let email = document.querySelector("#email").value;
    let senha = document.getElementById("password").value;

    if (email =="" || senha == ""){
        alert("Obrigatório o preenchimento do email e senha");
        document.querySelector("#email").focus();
    } else{
        pesquisa(email, senha);
        alert("você preencheu");
    }
};


function pesquisa(email, senha)
{
    if (email == "producao@condutiva.com.br" && senha == "producao"){
     
        window.open("../assets/index2.html");
        window.close();
  
    } else{
        alert("Email ou senha inválido");
        document.querySelector("#email").focus()
    }
}