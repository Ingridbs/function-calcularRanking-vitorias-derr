function calcularRanking(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    let ranking;

    if (vitorias < 10) {
        ranking = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        ranking = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        ranking = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        ranking = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        ranking = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        ranking = "Lendário";
    } else {
        ranking = "Imortal";
    }

   
    return {
        saldo: saldo,
        ranking: ranking
    };
}

function exibirMensagem(vitorias, derrotas) {
    let resultado = calcularRanking(vitorias, derrotas);
    
    console.log(`O Herói tem de saldo de ${resultado.saldo} está no nível de ${resultado.ranking}`);
}
let vitorias = 45;
let derrotas = 20;

exibirMensagem(vitorias, derrotas);
