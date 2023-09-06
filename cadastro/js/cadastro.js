//CRIANDO EVENTOS DOS BOTOES
document.getElementById('botaoLogin')
    .addEventListener('click', (e)=>{
        e.preventDefault();
        window.open('../login.html');
        window.close();

    })
document.getElementById('botaoCad')
    .addEventListener('click', (e)=>{
        e.preventDefault();
        if(email.value !== "" || senha.value !== ""){
            cadastro()
        }else{
            alert("Preencha o email e senha")
            email.focus;
        }
    })

    //criando CRUD no storage

    //create - Cadastrar
    function cadastro(){

    let email = document.getElementById('email');
    let senha = document.getElementById('senha');

    let usuarios = new Array();

    //verificando se existe USUARIOS NO Storage
    if(localStorage.hasOwnProperty('usuarios')){
        //Recuperar os valores da chave ususarios
        //convertend a chave USUARIOS em objeto
        usuarios = JSON.parse(localStorage.getItem('usuarios'));

    };

    //adicionar um novo usuario no 
    email = email.value;
    senha = senha.value;
    
    usuarios.push({email,senha});//quando se coloca conchetes dentro do parenteses "{" esta falando para o javascript que o que esta dentro é o objeto

    //convertendo para string
    localStorage.setItem('usuarios', JSON.stringify(usuarios))

    alert('Usuário cadastrado com sucesso')
    document.getElementById('email').value = "";
    document.getElementById('senha').value = "";
    document.getElementById('email').focus();
}