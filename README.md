# Car Shop

Neste projeto foi desenvolvida uma API para gerenciar uma concessionária de veículos. Estruturando-na em TypeScript na arquitetura MSC, aplicando os pilares de POO e utilizando o ODM Mongoose para se conectar com um banco de dados MongoDB.

## Habilidades

- Prática dos pilares da Programação Orientada a Objetos: Herança, Abstração, Encapsulamento e Polimorfismo;

- Uso de Composição;

- Criação e utilização de Interfaces;

- Implementação, em TypeScript de Classes, Instâncias, Atributos, Métodos e Objetos;

- Aplicação dos conhecimentos de MongoDB, Typescript e POO possibilitando a criação de uma API com CRUD.


## Instruções Gerais

- Clone o repositório

 `git clone git@github.com:GeovanaAugusta/car-shop-project.git`.
 
 - Entre na pasta do repositório que você acabou de clonar:
    
 `cd car-shop-project`

## Utilizando o Docker para subir o banco do MongoDB

- Instale o Docker, caso ainda não o tenha instalado;

- Baixe a imagem do MongoDB, usando o comando:

`docker pull mongo`

- Crie o container do MongoD, usando o comando:

`docker run --name <nome-do-container> -p 27017:27017 -d mongo`

- Verifique se o container está rodando, usando o comando:

`docker ps`

- Dessa forma será inicializado um container chamado car_shop e outro chamado car_shop_db, sendo assim possível rodar o container car_shop via CLI ou abri-lo no VS Code. Na sequência use o comando:

`docker exec -it car_shop bash`

- Dessa forma terá acesso ao terminal interativo do container criado pelo compose que está rodando em segundo plano;

- Por fim, instale as dependências e inicie a aplicação que rodará na porta 3000:

``` bash
npm install
npm run dev
```

## Rodando localmente

- Configure as variáveis de ambiente editando o arquivo `.env.example` com suas respectivas variáveis e o renomeando em seguida para `.env`.
- Por fim, instale as dependências e inicie a aplicação que rodará na porta 3000:


``` bash
npm install
npm run dev
```

# Documentação da API

#### Cadastrar um novo veículo do tipo carro
```bash
  POST /car
```

 + Formato do corpo da Requisição:
    + Body

```json
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  }
```

  + Response se o carro for cadastrado com sucesso, com um status http `201`:

```json
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  }
```
  
  + Caso a requisição receba um objeto vazio, quantidade de assentos inferior a 2, quantidade de portas inferior a 2, sem possuir as chaves `model`, `year`, `color`, `buyValue`, `doorsQty` e `seatsQty`, o seu retorno será apenas um status http `400`, sem body.
  
#### Listar todos os veículos do tipo carro
```bash
  GET /car
```

  + Response se todos os carros forem listados com sucesso, com um status http `200`:

```json
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  }
  /* ... */
  ]
```

  + Response se não houver carros:

```json
[]
```

#### Listar carro por ID
```bash
  GET /car/:id
```

  + Response se o carro for listado com sucesso, com um status http `200`:

```json
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  }
```

  + Response se o id possuir menos que 24 caracteres, com um status http `400`:

```json
    {
      "error": "Id must have 24 hexadecimal characters"
    }
```

  + Response se o id possuir 24 caracteres mas for inválido, com um status http `404`:

```json
    {
      "error": "Object not found"
    }
```

#### Atualizar o registro de um carro por ID
```bash
  PUT /car/:id
```

  + Formato do corpo da Requisição:
    + Body

```json
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Fiat Uno",
    year: 1963,
    color: "blue",
    buyValue: 3500,
    seatsQty: 4,
    doorsQty: 4
  }
```

  + Response se o carro for atualizado com sucesso, com um status http `200`:

```json
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Fiat Uno",
    year: 1963,
    color: "blue",
    buyValue: 3500,
    seatsQty: 4,
    doorsQty: 4
  }
```

  + Response se o id possuir menos que 24 caracteres, com um status http `400`:

```json
    {
      "error": "Id must have 24 hexadecimal characters"
    }
```

  + Response se o id possuir 24 caracteres mas for inválido, com um status http `404`:

```json
    {
      "error": "Object not found"
    }
```

  + Caso o body da requisição esteja vazio é retornado apenas um status http `400`, sem body.

#### Deletar um carro por ID
```bash
  DELETE /car/:id
```

  + Caso o carro seja removido com sucesso é retornado apenas um status http `204`, sem body.
  
  + Response se o id possuir menos que 24 caracteres, com um status http `400`:

```json
    {
      "error": "Id must have 24 hexadecimal characters"
    }
```

  + Response se o id possuir 24 caracteres mas for inválido, com um status http `404`:

```json
    {
      "error": "Object not found"
    }
```

#### Cadastrar um novo veículo do tipo moto
```bash
  POST /motorcycles
```

 + Formato do corpo da Requisição:
    + Body

```json
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  }
```

  + Response se a moto for cadastrada com sucesso, com um status http `201`:

```json
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  }
```

  + Caso a requisição receba um objeto vazio, `category` diferente de `Street`, `Custom` ou `Trail`, `engineCapacity` menor ou igual a zero/ou maior que 2500, sem possuir as chaves `model`, `year`, `color`, `buyValue`, `category` e `engineCapacity`, o seu retorno será apenas um status http `400`, sem body.

#### Listar todos os veículos do tipo moto
```bash
  GET /motorcycles
```

  + Response se todos as motos forem listadss com sucesso, com um status http `200`:

```json
[
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  }
  /* ... */
  ]
```

  + Response se não houver motos:

```json
[]
```

#### Listar moto por ID
```bash
  GET /motorcycles/:id
```

  + Response se a moto for listada com sucesso, com um status http `200`:

```json
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  }
```

  + Response se o id possuir menos que 24 caracteres, com um status http `400`:

```json
    {
      "error": "Id must have 24 hexadecimal characters"
    }
```

  + Response se o id possuir 24 caracteres mas for inválido, com um status http `404`:

```json
    {
      "error": "Object not found"
    }
```

#### Atualizar o registro de uma moto por ID
```bash
  PUT /motorcycles/:id
```

  + Formato do corpo da Requisição:
    + Body

```json
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "black",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  }
```

  + Response se o carro for atualizado com sucesso, com um status http `200`:

```json
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Honda CG Titan 125",
    year: 1963,
    color: "black",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  }
```

  + Response se o id possuir menos que 24 caracteres, com um status http `400`:

```json
    {
      "error": "Id must have 24 hexadecimal characters"
    }
```

  + Response se o id possuir 24 caracteres mas for inválido, com um status http `404`:

```json
    {
      "error": "Object not found"
    }
```

  + Caso o body da requisição esteja vazio é retornado apenas um status http `400`, sem body.

#### Deletar uma moto por ID
```bash
  DELETE /motorcycles/:id
```

  + Caso a moto seja removida com sucesso é retornado apenas um status http `204`, sem body.
  
  + Response se o id possuir menos que 24 caracteres, com um status http `400`:

```json
    {
      "error": "Id must have 24 hexadecimal characters"
    }
```

  + Response se o id possuir 24 caracteres mas for inválido, com um status http `404`:

```json
    {
      "error": "Object not found"
    }
```
