let botaoCadastrar = document.querySelector("#cadastrar"); // Variável para o botão de cadastro
let msgButton = document.querySelector("#msgButton"); // Variável para a mensagem de feedback do botão
let nome = document.querySelector("#nome"); // Variável para o campo de nome
let msgNome = document.querySelector("#msgNome"); // Variável para a mensagem de feedback do campo de nome
let email = document.querySelector("#email"); // Variável para o campo de email
let msgEmail = document.querySelector("#msgEmail"); // Variável para a mensagem de feedback do campo de email
let senha = document.querySelector("#senha"); // Variável para o campo de senha
let msgSenha = document.querySelector("#msgSenha"); // Variável para a mensagem de feedback do campo de senha
let confirmarSenha = document.querySelector("#confirmarSenha"); // Variável para o campo de confirmação de senha
let msgConfirmarSenha = document.querySelector("#msgConfirmarSenha"); // Variável para a mensagem de feedback do campo de confirmação de senha
let telefone = document.querySelector("#telefone"); // Variável para o campo de telefone
let msgTelefone = document.querySelector("#msgTelefone"); // Variável para a mensagem de feedback do campo de telefone
let endereco = document.querySelector("#endereco"); // Variável para o campo de endereço
let msgEndereco = document.querySelector("#msgEndereco"); // Variável para a mensagem de feedback do campo de endereço
let plus = document.querySelector("#plus"); // Variável para o ícone de adicionar telefone
let lista = document.querySelector("#lista"); // Variável para a lista de telefones adicionais
let eye = document.querySelector("#eye"); // Variável para o ícone de mostrar/ocultar senha 
let eyeConfirmar = document.querySelector("#eyeConfirmar"); // Variável para o ícone de mostrar/ocultar confirmação de senha
let mascara = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validação de senha
function validarSenha(senha) {
    let tamanho = senha.trim().length;

    if (tamanho < 6) { 
        msgSenha.style.color = "red";
        msgSenha.textContent = "Senha fraca!";
    } else if (tamanho <= 10) {
        msgSenha.style.color = "orange";
        msgSenha.textContent = "Senha aceitável";
    } else {
        msgSenha.style.color = "green";
        msgSenha.textContent = "Senha forte";
    }
}



// Eventos de validação em tempo real

// Validação do campo de email
email.addEventListener('keyup', function () {
    if (!mascara.test(email.value)) {
        msgEmail.style.color = "red";
        msgEmail.textContent =   "Email inválido!";
    } else {
        msgEmail.style.color = "green";
        msgEmail.textContent = "Email valido!";
    }
});

// Validação do campo de senha
senha.addEventListener('keyup', function () {
    validarSenha(senha.value); // Chama a função de validação de senha toda vez que o usuário digitar algo no campo de senha
});

// Validação do campo de telefone
telefone.addEventListener('keyup', function () {
    if (telefone.value.length === 11) {
        msgTelefone.style.color = "green";
        msgTelefone.textContent = "Telefone válido!";
    } else {
        msgTelefone.style.color = "red";
        msgTelefone.textContent = "Telefone inválido!";
    }
});

// Validação do campo de confirmação de senha
confirmarSenha.addEventListener('keyup', function () {
    if (senha.value === confirmarSenha.value) {
        msgConfirmarSenha.style.color = "green";
        msgConfirmarSenha.textContent = "Senha confirmada!";
    } else {
        msgConfirmarSenha.style.color = "red";
        msgConfirmarSenha.textContent = "Senha não confirmada!";
    }
});

// Evento de clique para o botão de cadastro
botaoCadastrar.addEventListener('click', function () {
    if (nome.value === "" || email.value === "" || senha.value === "" || confirmarSenha.value === "" || telefone.value === "" || endereco.value === "") { // Verifica se algum campo obrigatório está vazio
        msgButton.style.color = "red";
        msgButton.textContent = "Preencha todos os campos!";
    } else if (msgEmail.textContent === "Email inválido!" || msgSenha.textContent === "Senha fraca!" || msgTelefone.textContent === "Telefone inválido!" || msgConfirmarSenha.textContent === "Senha não confirmada!") { // Verifica se algum campo obrigatório está inválido
        msgButton.style.color = "red";
        msgButton.textContent = "Preencha os campos corretamente!";
    }
        else {
        msgButton.style.color = "green";
        msgButton.textContent = "Cadastro realizado com sucesso!";
    }
});

// Evento de clique para o ícone de adicionar telefone
plus.addEventListener('click', function () {
    let novoTelefone = document.createElement("li"); // Cria um novo elemento de lista para o telefone adicional
    let inputTelefone = document.createElement("input"); // Cria um novo elemento de input para o telefone adicional
    let menos = document.createElement("i"); // Cria um novo elemento de ícone para o botão de excluir telefone adicional

    inputTelefone.type = "text";
    inputTelefone.placeholder = "Digite outro telefone";
    inputTelefone.classList.add("input"); // Adiciona a classe "input" para manter o estilo consistente com os outros campos de telefone
    menos.classList.add("bi", "bi-x-circle", "excluir-icon"); // Adiciona as classes do Bootstrap para o ícone de excluir e a classe personalizada para posicionamento


    novoTelefone.appendChild(inputTelefone); // Adiciona o campo de telefone adicional ao elemento de lista
    novoTelefone.appendChild(menos); // Adiciona o ícone de excluir ao elemento de lista 
    lista.appendChild(novoTelefone); // Adiciona o elemento de lista com o telefone adicional e o ícone de excluir à lista de telefones

    // Evento de clique para o ícone de excluir telefone adicional
    menos.addEventListener('click', function () {
        lista.removeChild(novoTelefone);
    });
});

// Evento de clique para o ícone de mostrar/ocultar senha
eye.addEventListener('click', function () {
    if (senha.type === "password") {
        senha.type = "text";
        eye.classList.remove("bi-eye-fill");
        eye.classList.add("bi-eye-slash-fill");
    } else {
        senha.type = "password";
        eye.classList.remove("bi-eye-slash-fill");
        eye.classList.add("bi-eye-fill");
    }
});

// Evento de clique para o ícone de mostrar/ocultar confirmação de senha
eyeConfirmar.addEventListener('click', function () {
    if (confirmarSenha.type === "password") {
        confirmarSenha.type = "text";
        eyeConfirmar.classList.remove("bi-eye-fill");
        eyeConfirmar.classList.add("bi-eye-slash-fill");
    } else {
        confirmarSenha.type = "password";
        eyeConfirmar.classList.remove("bi-eye-slash-fill");
        eyeConfirmar.classList.add("bi-eye-fill");
    }
});
