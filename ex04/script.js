let compra = (prompt("Quanto deu sua compra"));
let desconto = 0.10 * compra ;
let total = compra - desconto ;


if (compra >= 100) {
    alert(`voce ganhou 10% de desconto :D . Sua compra ficou ${total}`)
} else {
    alert("VocÊ não ganhou desconto :(")
}
