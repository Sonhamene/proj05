let peso = (prompt("Qual o seu peso"))
let altura = (prompt("qual a sua altura"))
let IMC = peso/altura^2

if (IMC < 18.5 ) {
    alert (`Você esta abaixo do peso, o seu IMC foi ${IMC}`)
} if (IMC >= 18.5 && IMC <= 24.9) {
    alert (`Você esta no peso normal, seu IMC foi ${IMC}`)
} if (IMC >= 25 && IMC <= 29) {
    alert(`Você esta sobrepeso, seu IMC foi ${IMC}`)
} else {
    alert(`Você esta obeso, seu IMC foi ${IMC}`)
}
