# Desafio Star Wars

Esta API usa [NodeJS](https://nodejs.org/en/), certifique-se que possui instalado em sua máquina.

## Instalação

Para baixar a API deverá seguir as instruções abaixo:

```bash
  git clone https://github.com/gomeshud/desafioSW.git
  cd desafioSW
```

## Referências da API

URL:

```
 http://localhost:${PORTA}
```

#### Buscar todos os planetas

```http
  GET /v1/planet
```

#### Buscar planeta por NOME ou ID

```http
  GET /v1/planets/${id}
```

| Parâmetro    | Tipo     | Descrição                           |
| :----------- | :------- | :---------------------------------- |
| `Nome ou ID` | `string` | **Requirido** Nome ou ID do planeta |

#### Adicionar um planeta

```http
  POST /v1/planets/
```

| Parâmetro | Tipo     | Descrição                        |
| :-------- | :------- | :------------------------------- |
| `Nome`    | `string` | **Requirido** Nome do planeta    |
| `Clima`   | `string` | **Requirido** Clima do planeta   |
| `Terreno` | `string` | **Requirido** Terreno do planeta |

O corpo da requisição deverá conter:

```
planet:{
    name: "Nome do planeta",
    climate: "Clima do planeta",
    terrain: "Terreno do planeta"
}
```

Junto a esses dados, será salvo a quantidade de filmes em que apareceu.

#### CASO o planeta não faça parte da da [SWAPI](https://swapi.dev/), será retornado ERRO.

#### Deletar um planeta por ID

```http
  DELETE /v1/planets/${id}
```

| Parâmetro | Tipo     | Descrição                   |
| :-------- | :------- | :-------------------------- |
| `ID`      | `string` | **Requirido** ID do planeta |

## Variáveis de ambiente

Para executar este projeto, você precisará adicionar as variáveis de ambiente seguindo o arquivo .env.example

Será necessário alterar o nome para .env e preencher seguindo as instruções abaixo

`PORT`: Porta da rede que a API irá usar.

`DB_URL`: URI do Banco de dados.

## Como executar

Ao acessar a pasta pelo terminal de comandos, execute os comandos abaixo:

#### Para instalar as bibliotecas:

```bash
  npm install
```

ou

```bash
  yarn
```

#### Para iniciar o servidor NodeJS:

```bash
  npm start
```

ou

```bash
  yarn start
```

#### Para executar os testes:

```bash
  npm run test
```

ou

```bash
  yarn test
```

## Especificações técnicas

**Servidor:** Node, Express

**Banco de dados:** MongoDB

**Testes:** Jest

**Requisição de API externa:** Axios

## Autor

- [@gomesHud](https://www.github.com/gomeshud)
