function calculosTabuada() {
    var n = document.getElementById("numero").value;
    n = Number(n);

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Número digitado: " + n + "<br>";

    var i = 0;
    while (i <= 10) {
        resultado.innerHTML += n + " x " + i + " = " + (n * i) + "<br>";
        i++;
    }
}
