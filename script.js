function CalculoValores () {

    let ValorInput = Number (document.getElementById ("ValorAdicional").value); 

    if (ValorInput == 1.00 || ValorInput <= 1.74) {
        document.getElementById("ExporValores").textContent = "Você adicionou R$" + ValorInput + " e tem direito a 30min.";

        var TrocoInput = ValorInput - 1.00;
        document.getElementById("Troco").textContent = "O seu troco é: R$" + TrocoInput;
    }
    
    else if (ValorInput == 1.75 || ValorInput <= 2.99) {
        document.getElementById("ExporValores").textContent = "Você adicionou R$" + ValorInput + " e tem direito a 60min.";

        var TrocoInput = ValorInput - 1.75;
        document.getElementById("Troco").textContent = "O seu troco é: R$" + TrocoInput;
    }
        
    else if (ValorInput == 3.00 || ValorInput > 3.00) {
        document.getElementById("ExporValores").textContent = "Você adicionou R$" + ValorInput + " e tem direito a 120min. Este é o tempo máximo permitido.";

        var TrocoInput = ValorInput - 3.00;
        document.getElementById("Troco").textContent = "O seu troco é: R$" + TrocoInput;
    }

    else if (ValorInput < 1.00 || ValorInput > 3.00) {
        document.getElementById("ExporValores").textContent = "O valor inserido é inválido, tente novamente com os valores mostrados acima.";
    }
    
    else {
    }
}
