# Vetores e Matrizes

São formas de armazenar uma lista de dados. Os **vetores** funcionam em uma escala menor, enquanto as **matrizes** são **vetores** agrupados como uma planilha

## Vetor

```js
    let nomes = ["José", "Roberto", "Claudio"]

    console.log(nomes)
    console.log(nomes[0])
    console.log(nomes[1])
    console.log(nomes[2])

    //Saída: ["José", "Roberto", "Claudio"]
    //       José
    //       Roberto
    //       Claudio
```

## Matriz

```js
    //Armazenando vetores dentro de um vetor
    let timePokemon = [
        ["Pikachu", "masculino", 1],
        ["Charmander", "feminino", 5],
    ]

    console.log(
        "O pokemon " + timePokemon[0][0] + 
        " do sexo " + timePokemon[0][1] + 
        " está lvl." + timePokemon[1][2]
    )

    //Saída: O pokemon Pikachu do sexo masculino está lvl.5
```