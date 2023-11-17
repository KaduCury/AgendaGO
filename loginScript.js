document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    logar(email, senha);
});

document.getElementById('buttonLoginGoogle').addEventListener('click', function() {
    window.location.href = 'main.html';
});

// Modal Cadastrar Engine
var modalCadastro = document.getElementById('formCadastro'); 
var openModalCadastro = document.getElementById('buttonCadastrar'); 
var buttonCloseCadastro = document.getElementById('fecharCadastro');

openModalCadastro.onclick = function() {
    modalCadastro.showModal();
}

buttonCloseCadastro.onclick = function() {
    modalCadastro.close();
};

document.getElementById('buttonCadastrar').addEventListener('click', function() {
    modalCadastro.classList.add('show'); // Adiciona a classe show ao abrir
});

buttonCloseCadastro.onclick = function() {
    modalCadastro.classList.remove('show'); // Remove a classe show ao fechar
};

document.getElementById('fecharCadastro').addEventListener('click', function() {
    modalCadastro.close();
});

document.getElementById('buttonCadastrar').addEventListener('click', function() {
    modalCadastro.showModal();
});

// Validação de Senha
document.getElementById('buttonSalvarCadastro').addEventListener('click', function() {
    var campoEmailCadastro = document.getElementById('campoEmailCadastro').value;
    var campoConfirmacaoSenha = document.getElementById('campoConfirmacaoSenha').value;
    salvarCadastro(campoEmailCadastro,campoConfirmacaoSenha);
    modalCadastro.close();
})

function salvarCadastro(campoEmailCadastro, campoConfirmacaoSenha){
    localStorage.setItem('loginCadastrado_', campoEmailCadastro);
    localStorage.setItem('senhaCadastrada_', campoConfirmacaoSenha);
}

// Efetuando o login

document.getElementById('buttonEntrar').addEventListener('click', function(){
var campodoLogin = document.getElementById('campoEmail').value;
var campodaSenha = document.getElementById('campoSenha').value;
logar(campodoLogin, campodaSenha);
})

function logar(campodoLogin, campodaSenha){
    var loginCadastrado = localStorage.getItem('loginCadastrado_');
    var senhaCadastrada = localStorage.getItem('senhaCadastrada_');
    var mensagemSenhaIncorreta = document.getElementById('mensagemErro');

    if (loginCadastrado != campodoLogin || senhaCadastrada != campodaSenha){
        mensagemSenhaIncorreta.innerHTML = '<h6>Email ou senha incorretos</h6>';
    }
    else{
        window.location.href = 'main.html';

    }

}

