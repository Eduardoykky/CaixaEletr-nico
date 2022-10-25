/*
1. Solicite o nome e cpf do seu cliente
2. Ofereça a opção de saque ou depósito
3. Pergunte um valor
4. Caso a opção de saque seja a escolhida, remova o valor
inserido do saldo total.
5. Caso a opção de depósito seja escolhida, adicione o valor
inserido do saldo total
6. Pergunte se o seu usuário deseja continuar. (Insira 1 para
continuar e 2 para parar)
7. Exiba o saldo total
8. Exiba o maior valor inserido(independente de ser depósito ou
saque)
9. Insira a média dos valores inseridos(independente de ser
depósito ou saque)
REGRAS:
1- Não deve ser permitido sacar um valor não disponível no saldo.
2- Não deve ser permitido sacar nem depositar um valor negativo.
*/

var operacao
var valor
var maiorValor = 0
var mediaValor = 0
var valorTotal = 0
var quantidade = 0
var saldo = 1000
var continuar
while (continuar != 2) {
    
    operacao = prompt("Saque ou depósito s ou d")
    valor = parseInt(prompt("Insira o valor desejado"))

    if (valor >= 0){
        
        if(valor >= maiorValor){
            maiorValor = valor
        }

        if (operacao == "s" && valor <= saldo){
            saldo = saldo - valor
            quantidade++
            valorTotal = valorTotal + valor
        }else if (operacao == "s" && valor > saldo) {
            console.log("O valor inserido foi maior que o saldo total")
        }

        if(operacao == "d"){
            saldo = saldo + valor
            quantidade++
            valorTotal = valorTotal + valor
        }

        mediaValor = valorTotal / quantidade
    }else {
        console.log("O valor deve ser positivo")
    }
    continuar = prompt("Deseja continuar? 1 pra sim e 2 para nao")
}
console.log("O seu saldo total é R$ ", saldo)
console.log("O maior valor inserido foi R$", maiorValor)
console.log("A média de valores inseridos foi de", mediaValor)