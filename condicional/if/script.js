let possuiDinheiro = true
let itemComprado = " "

if(possuiDinheiro) {
    itemComprado = "Leite"
} else {
    itemComprado = "Nenhum"
}

console.log("Item comprado: " + itemComprado)

possuiDinheiro = true
let possuiOvos = true

if(possuiDinheiro) {
    itemComprado = "Leite e ovos"
} else if(possuiOvos) {
    itemComprado = "Leite"
}

console.log("Item comprado: " + itemComprado)