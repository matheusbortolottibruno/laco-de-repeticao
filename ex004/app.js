//- faça um programa que mostre apenas os números ímpares de 0 à 100, um embaixo do outro
function De51a99() {
    let contador = 1
    while (contador <= 100) {
        document.getElementById("resposta").innerHTML += contador + "<br>"
        contador = contador + 2
    }

}