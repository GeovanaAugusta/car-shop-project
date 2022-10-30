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

- Em progresso.
