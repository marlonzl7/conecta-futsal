function validarNome() {
    const input = document.getElementById("nome").value;
    const erroSpan = document.getElementById("nomeInvalido");
    const divErro = erroSpan.parentElement;

    for (let i = 0; i < input.length; i++) {
        const codigo_ascii = input.charCodeAt(i);

        if (!((codigo_ascii >= 65 && codigo_ascii <= 90) || (codigo_ascii >= 97 && codigo_ascii <= 122) || (codigo_ascii === 32))) {
            erroSpan.textContent = "O nome só deve conter letras";
            divErro.classList.add("active");
            return false;
        }
    }

    divErro.classList.remove("active");
    erroSpan.textContent = "";

    return true;
}

function validarSobrenome() {
    const input = document.getElementById("sobrenome").value;
    const erroSpan = document.getElementById("sobrenomeInvalido");
    const divErro = erroSpan.parentElement;

    for (let i = 0; i < input.length; i++) {
        const codigo_ascii = input.charCodeAt(i);

        if (!((codigo_ascii >= 65 && codigo_ascii <= 90) || (codigo_ascii >= 97 && codigo_ascii <= 122) || (codigo_ascii === 32))) {
            erroSpan.textContent = "O sobrenome só deve conter letras";
            divErro.classList.add("active");
            return false;
        }
    }

    divErro.classList.remove("active");
    erroSpan.textContent = "";

    return true;
}


function validarTelefone() {
    const input = document.getElementById("telefone").value;
    const erroSpan = document.getElementById("telefoneInvalido");
    const divErro = erroSpan.parentElement;

    for (let i = 0; i < input.length; i++) {
        const codigo_ascii = input.charCodeAt(i);

        if (!((codigo_ascii >= 48 && codigo_ascii <= 57) || (codigo_ascii === 40 || codigo_ascii === 41 || codigo_ascii === 45))) {
            let msg = "O telefone só deve conter números.";
            erroSpan.textContent = msg;
            divErro.classList.add("active");
            return false;
        }
    }

    divErro.classList.remove("active");
    erroSpan.textContent = "";

    return true;
}

function validarEmail() {
    const input = document.getElementById("email").value;
    const erroSpan = document.getElementById("emailInvalido");
    const divErro = erroSpan.parentElement;
    let temArroba = false;
    let temPonto = false;
    let emailValido = false;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "@") {
            temArroba = true;

            for (let j = i; j < input.length; j++) {
                if (input[j] === ".") {
                    temPonto = true;
                    emailValido = true;
                    break;
                }
            }
        }
    }

    if (!emailValido) {
        let msg = "Email inválido: ";

        if (!temArroba) {
            msg += "É necessário ter '@'; ";
        }
        
        if (!temPonto) {
            msg += "É necessário ter '.' após o '@'; ";
        }

        erroSpan.textContent = msg;
        divErro.classList.add("active");

    } else {
        divErro.classList.remove("active");
        erroSpan.textContent = "";
    }

    return emailValido;
}

function validarSenha() {
    const input = document.getElementById("senha").value;
    const erroSpan = document.getElementById("senhaInvalida");
    const divErro = erroSpan.parentElement;
    let contemMinuscula = false;
    let contemMaiuscula = false;
    let contemNumero = false;
    let contemEspecial = false;
    let tamanhoMinimo = input.length >= 8;

    for (let i = 0; i < input.length; i++) {
        const codigo_ascii = input.charCodeAt(i);

        if (codigo_ascii >= 97 && codigo_ascii <= 122) {
            contemMinuscula = true;
        } else if (codigo_ascii >= 65 && codigo_ascii <= 90) {
            contemMaiuscula = true;
        } else if (codigo_ascii >= 48 && codigo_ascii <= 57) {
            contemNumero = true;
        } else if (
            (codigo_ascii >= 32 && codigo_ascii <= 47) || 
            (codigo_ascii >= 58 && codigo_ascii <= 64) || 
            (codigo_ascii >= 91 && codigo_ascii <= 96) || 
            (codigo_ascii >= 123 && codigo_ascii <= 126)) 
        {
            contemEspecial = true;
        }
    }

    let msg = "";

    msg += (!tamanhoMinimo) ? "Senha deve ter pelo menos 8 caracteres. \n" : "";
    msg += (!contemMinuscula) ? "Senha deve ter pelo menos uma letra minúscula. \n" : "";
    msg += (!contemMaiuscula) ? "Senha deve ter pelo menos uma letra maiúscula. \n" : "";
    msg += (!tamanhoMinimo) ? "Senha deve ter pelo menos um número. \n" : "";
    msg += (!tamanhoMinimo) ? "Senha deve ter pelo menos um caractere especial. " : "";

    if (msg != "") {
        erroSpan.textContent = msg;
        divErro.classList.add("active");
        return false;
    } else {
        erroSpan.textContent = "";
        divErro.classList.remove("active");
        return true;
    }
}

function validarTipoUsuario() {
    const input = document.getElementById("tipoUsuario").value;
    const tiposValidos = ["jogador", "tecnico"];
    const erroSpan = document.getElementById("tipoUsuarioInvalido");
    const divErro = erroSpan.parentElement;

    for (let i = 0; i < tiposValidos.length; i++) {
        if (input === tiposValidos[i]) {
            divErro.classList.remove("active");
            erroSpan.textContent = "";
            return true;
        }
    }

    erroSpan.textContent = "O tipo de usuário só pode ser [jogador ou técnico]";
    divErro.classList.add("active");

    return false;
}