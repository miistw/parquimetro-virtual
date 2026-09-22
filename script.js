class Parquimetro {

    calcularTempo(valor) {

        if (valor < 1.00) {
            return 0;
        }

        if (valor < 1.75) {
            return 30;
        }

        if (valor < 3.00) {
            return 60;
        }

        return 120;
    }


    calcularTroco(valor) {

        if (valor < 1.00) {
            return 0;
        }

        if (valor < 1.75) {
            return valor - 1.00;
        }

        if (valor < 3.00) {
            return valor - 1.75;
        }

        return valor - 3.00;
    }
}


function CalculoValores() {

    const input = document.getElementById("ValorAdicional");
    const resultado = document.getElementById("ExporValores");

    const valorTexto = input.value.trim();


    if (valorTexto === "") {
        resultado.textContent = "Digite um valor para utilizar o parquímetro.";
        return;
    }

    const valor = Number(valorTexto);


    if (isNaN(valor)) {
        resultado.textContent = "Digite um valor válido.";
        return;
    }


    if (valor < 0) {
        resultado.textContent = "O valor não pode ser negativo.";
        return;
    }


    const parquimetro = new Parquimetro();


    const tempo = parquimetro.calcularTempo(valor);

    if (tempo === 0) {
        resultado.textContent = "Valor insuficiente. Insira pelo menos R$ 1,00.";
        return;
    }

    const troco = parquimetro.calcularTroco(valor);

    if (tempo === 120) {
        resultado.textContent =
            "Você inseriu R$ " + valor.toFixed(2) +
            ". Tempo: 120 minutos (tempo máximo permitido)." +
            " Troco: R$ " + troco.toFixed(2);
    } 
    
    else {
        resultado.textContent =
            "Você inseriu R$ " + valor.toFixed(2) +
            ". Tempo: " + tempo + " minutos." +
            " Troco: R$ " + troco.toFixed(2);
    }
}