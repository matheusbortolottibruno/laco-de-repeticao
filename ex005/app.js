//- faça um programa que mostre a mensagem "o hexa vem, algum dia, mas vem" 15 vezes
function hexa(){
    let contador = 1
    while(contador <= 15){
        document.getElementById("resposta").innerHTML += "o hexa vem, algum dia, mas vem<br>"
        contador = contador + 1
    }  
}