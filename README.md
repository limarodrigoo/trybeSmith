
# Trybesmith

O projeto, feito durante curso da trybe, foi meu primeiro contato com o TypeScript 
e uma com uma linguagem fortemente tipada, e trata-se de uma API para um ferreiro.


## Features

- Criar Usuário 
- Login com geração de Token
- Criação e listagem de ordens
- Criar e Listar produtos


## Tech Stack


![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

## Instalando Dependências

Após clonar repositório
```bash
  cd trybesmith  
  npm install
```

Você precisa estar com um servidor mySQL rodando para rodar o servidor.

Configurando a conexão:
- Crie uma arquivo .env
```bash
  touch .env  
```
## Environment Variables

Crie as váriaveis de ambiente:

`MYSQL_HOST`

`MYSQL_USER`

`MYSQL_PASSWORD`


Rode o projeto
```bash
  npm start
```

## Rotas

#### User Router
/user
```http
  POST

```
#### Product Router
/post
```http
  GET
  POST

```
#### Login Router
/login
```http
  POST

```
#### Order Router
/categories
```http
  GET 
  POST

```
