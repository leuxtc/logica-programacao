# Variáveis

Variável é uma forma de armazenamento que podem ser usadas outras vezes em diversos lugares do código. É usado para valores que podem variar como o nome de um jogador

```js
    //Declarando uma variável
    let nickname = "jogador69"

    //Adicionando mensagem e concatenando com o nickname
    console.log("Bem-vindo! " + nickname)

    //Saída: Bem vindo! jogador69
```

## Constantes

Já as constantes são uma forma de armazenamento de valores constantes, que vão se repetir muitas vezes pelo código

```js
    //Declarando uma variável
    let notificacao = "Nova notificação: "

    //Adicionando a constante e concatenando com a mensagem
    console.log(notificacao + "você tem um novo seguidor!")
    console.log(notificacao + "alguém curtiu seu comentário!")

    //Saída: Nova notificação: você tem um novo seguidor!
    //       Nova notificação: alguém curtiu seu comentário!
```

## Tipos de variáveis

| Tipo | Resumo |
|---|---|
| String | são valores de texto |
| Numbers | é um tipo que armazena numeros |
| Booleans | armazena valores de **true** ou **false** |