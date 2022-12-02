//- faça um programa que mostre os números de 51 à 99, um embaixo do outro 
function De51a99() {
    let contador = 51
    while (contador <= 99) {
        document.getElementById("resposta").innerHTML += contador + "<br>"
        contador = contador + 1
    }

}