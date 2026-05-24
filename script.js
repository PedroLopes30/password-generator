var elementoResultado = document.getElementById('resultado-senha');
var elementoTamanho = document.getElementById('tamanho-senha');
var elementoMaiusculas = document.getElementById('maiusculas');
var elementoMinusculas = document.getElementById('minusculas');
var elementoNumeros = document.getElementById('numeros');
var elementoSimbolos = document.getElementById('simbolos');
var botaoGerar = document.getElementById('botao-gerar');
var botaoCopiar = document.getElementById('botao-copiar');
var barraForca = document.getElementById('barra-forca');
var textoForca = document.getElementById('texto-forca');

function resultado() {
    var senha = elementoResultado.innerHTML;
    
    if (senha !== 'SuaSenhaAqui' && senha !== 'Selecione uma opção!') {
        navigator.clipboard.writeText(senha);
        alert('Senha copiada com sucesso!');
    }
}

function gerarSenha(tamanho, temMaiusculas, temMinusculas, temNumeros, temSimbolos) {
    var caracteres = "",
        senhaFinal = "";
    if (temMaiusculas) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }; 
    if (temMinusculas) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    };
    if (temNumeros) {
        caracteres += "0123456789";
    };    
    if (temSimbolos) {
        caracteres += "!@#$%^&*()_+~|}{[]:;?><,./-="; 
    };       
    if (caracteres === "") {
        return "Selecione uma opção!";
    }
    for (var i = 0, n = caracteres.length; i < tamanho; ++i) {
        senhaFinal += caracteres.charAt(Math.floor(Math.random() * n));
    }
    return senhaFinal;
}

function escolha() {
    var tamanho = parseInt(elementoTamanho.value);
    var temMaiusculas = elementoMaiusculas.checked;
    var temMinusculas = elementoMinusculas.checked;
    var temNumeros = elementoNumeros.checked;
    var temSimbolos = elementoSimbolos.checked;

    var novaSenha = gerarSenha(tamanho, temMaiusculas, temMinusculas, temNumeros, temSimbolos);
    
    elementoResultado.innerHTML = novaSenha;

    // macho aqui tu adiciona a função da barrinha pra indicar força
}    
botaoGerar.addEventListener('click', escolha);
botaoCopiar.addEventListener('click', resultado);