const crypto = require("crypto");

function gerarHash(senha) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto.scryptSync(senha, salt, 64).toString("hex");

    return `${salt}:${hash}`;
}

function compararSenhas(senhaDigitada, hashArmazenado) {
    const [salt, hashOriginal] = hashArmazenado.split(":");
    const hashDigitada = crypto.scryptSync(senhaDigitada, salt, 64).toString("hex");
    return hashDigitada === hashOriginal;
}

module.exports = {
    gerarHash,
    compararSenhas
}