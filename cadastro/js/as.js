/* CRIANDO EVENDO DO BOTÃO  */

document.getElementById('botaoEntrar')
document.addEventListener('click', (e) =>{
    e.preventDefault();
})

document.getElementById('botaoCadastro')
.addEventListener('click', (e) =>{
    e.preventDefault();
    window.open('../assets/cadastrar.html')
    window.close()
})

function verifica(){/*  */
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    if(email == "" || senha == ""){
        alert("Obrigatorio preencher os campos");
        document.getElementById('email').focus();
    }else{
        consultar(email, senha);
    }
}

function consultar(email, senha){
    let usuarios = new Array(); /* AQUI ESTAMOS DEFININDO UMA MATRIZ */

    /* verificando se a chave usuarios existe no localstorage */
    if(localStorage.hasOwnProperty('usuarios'));{
        /* recuperar os valores da propriedade usuarios do localStorage */
        /* convertendo o USUARIO em objeto para podermos usar as propriedades  */

        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    }

    for(let i = 0;i<usuarios.length;i++){
        if(usuarios[i].email == email && usuarios[i].senha == senha){
            window.open("../assets/index2.html")
            window.close();
            break;
        }
    }
    alert("Email ou senha inválido")
document.getElementById('email').focus()
}



