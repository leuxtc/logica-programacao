let fruta = "abacate"

switch (fruta){
    case "laranja":
        console.log("Suco de laranja")
        break

    case "banana":
    case "abacate":
        console.log("Vitamina de " + fruta)
        break

    case "maçã":
        console.log("Suco de maçã")
        break
    
    default:
        console.log("Água")
}