function validarNome(input) {
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

function validarSobrenome(input) {
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


function validarTelefone(input) {
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

function validarEmail(input) {
    const erroSpan = document.getElementById("emailInvalido");
    const divErro = erroSpan.parentElement;
    let temArroba = false;
    // let temCaractereAntesDoArroba = false;
    let temPonto = false;
    let emailValido = false;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "@") {
            temArroba = true;

            for (let j = i; j < input.length; j++) {
                if (input[j] === ".") {
                    temPonto = true;
                    emailValido = true;

                    // if (input[j - 1] != "@") {
                    //     console.log[j - 1];
                    //     temCaractereAntesDoArroba = true;
                    // }

                    break;
                }
            }
        }
    }

    if (!emailValido) {
        let msg = "Email inválido:<br>";

        if (!temArroba) {
            msg += "É necessário ter '@';<br>";
        }

        // if (!temCaractereAntesDoArroba) {
        //     msg += "É necessário ter caracteres antes do '.' (Ex: @gmail)<br>"
        // }

        if (!temPonto) {
            msg += "É necessário ter '.' após o '@';";
        }

        erroSpan.innerHTML = msg;
        divErro.classList.add("active");

    } else {
        divErro.classList.remove("active");
        erroSpan.innerHTML = "";
    }

    return emailValido;
}

function validarSenha(input) {
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

    msg += (!tamanhoMinimo) ? "Senha deve ter pelo menos 8 caracteres. <br>" : "";
    msg += (!contemMinuscula) ? "Senha deve ter pelo menos uma letra minúscula. <br>" : "";
    msg += (!contemMaiuscula) ? "Senha deve ter pelo menos uma letra maiúscula. <br>" : "";
    msg += (!contemNumero) ? "Senha deve ter pelo menos um número. <br>" : "";
    msg += (!contemEspecial) ? "Senha deve ter pelo menos um caractere especial. " : "";

    if (msg != "") {
        erroSpan.innerHTML = msg;
        divErro.classList.add("active");
        return false;
    } else {
        erroSpan.textContent = "";
        divErro.classList.remove("active");
        return true;
    }
}

function validarTipoUsuario(input) {
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

function validarCep(input) {
    const erroSpan = document.getElementById("cepInvalido");
    const divErro = erroSpan.parentElement;

    for (let i = 0; i < input.length; i++) {
        const codigo_ascii = input.charCodeAt(i);

        if (!(codigo_ascii >= 48 && codigo_ascii <= 57)) {
            let msg = "O CEP só deve conter números";
            erroSpan.textContent = msg;
            divErro.classList.add("active");
            return false;
        }
    }

    return true;
}

function validarLogradouro(input) {
    const erroSpan = document.getElementById("sobrenomeInvalido");
    const divErro = erroSpan.parentElement;

    for (let i = 0; i < input.length; i++) {
        const codigo_ascii = input.charCodeAt(i);

        if (!((codigo_ascii >= 65 && codigo_ascii <= 90) || (codigo_ascii >= 97 && codigo_ascii <= 122) || (codigo_ascii === 32))) {
            erroSpan.textContent = "O Logradouro só deve conter letras";
            divErro.classList.add("active");
            return false;
        }
    }

    divErro.classList.remove("active");
    erroSpan.textContent = "";

    return true;
}

function validarNumero(input) {
    const erroSpan = document.getElementById("numeroInvalido");
    const divErro = erroSpan.parentElement;

    for (let i = 0; i < input.length; i++) {
        const codigo_ascii = input.charCodeAt(i);

        if (!(codigo_ascii >= 48 && codigo_ascii <= 57)) {
            let msg = "O Número não pode conter outros caracteres";
            erroSpan.textContent = msg;
            divErro.classList.add("active");
            return false;
        }
    }

    return true;
}

function validarComplemento(input) {
    const erroSpan = document.getElementById("complementoInvalido");
    const divErro = erroSpan.parentElement;

    for (let i = 0; i < input.length; i++) {
        const codigo_ascii = input.charCodeAt(i);

        if (!((codigo_ascii >= 48 && codigo_ascii <= 57) || (codigo_ascii >= 65 && codigo_ascii <= 90) || (codigo_ascii >= 97 && codigo_ascii <= 122) || (codigo_ascii == 32))) {
            erroSpan.textContent = "O complemento só pode conter números ou letras";
            divErro.classList.add("active");
            return false;
        }
    }

    divErro.classList.remove("active");
    erroSpan.textContent = "";

    return true;
}

function validarBairro(input) {
    const erroSpan = document.getElementById("bairroInvalido");
    const divErro = erroSpan.parentElement;

    for (let i = 0; i < input.length; i++) {
        const codigo_ascii = input.charCodeAt(i);

        if (!((codigo_ascii >= 65 && codigo_ascii <= 90) || (codigo_ascii >= 97 && codigo_ascii <= 122) || (codigo_ascii === 32))) {
            erroSpan.textContent = "O bairro só deve conter letras";
            divErro.classList.add("active");
            return false;
        }
    }

    divErro.classList.remove("active");
    erroSpan.textContent = "";

    return true;
}

function validarCidade(input) {
    const erroSpan = document.getElementById("cidadeInvalida");
    const divErro = erroSpan.parentElement;

    for (let i = 0; i < input.length; i++) {
        const codigo_ascii = input.charCodeAt(i);

        if (!((codigo_ascii >= 65 && codigo_ascii <= 90) || (codigo_ascii >= 97 && codigo_ascii <= 122) || (codigo_ascii === 32))) {
            erroSpan.textContent = "A cidade só deve conter letras";
            divErro.classList.add("active");
            return false;
        }
    }

    divErro.classList.remove("active");
    erroSpan.textContent = "";

    return true;
}

async function validarUf(input) {
    const ufsValidas = await buscarUfsValidas();
    const erroSpan = document.getElementById("ufInvalido");
    const divErro = erroSpan.parentElement;

    for (let i = 0; i < ufsValidas.length; i++) {
        if (input === ufsValidas[i]) {
            divErro.classList.remove("active");
            erroSpan.textContent = "";
            return true;
        }
    }

    erroSpan.textContent = "Estado inválido";
    divErro.classList.add("active");

    return false;
}
