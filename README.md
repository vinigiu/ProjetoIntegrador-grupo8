# Zé Boné - E-commerce de bonés

Projeto Integrador - Grupo 8

Autores:
  - Arthur Prange
  - Daniel Barbieri
  - Glauber Oliveira
  - Vinicius Giuseppe


E-comerce fictício de bonés com as seguintes funcionalidades:

  - Cadastro de usuário
  - Login de usuário
  - Cadastro de novos produtos
  - Cálculo de frete via API dos correios
  - Rotas privadas acessadas somente após login
  - Carrinho dinâmico
  - Geração de pedidos
  - Simualação de pagamento
 
 Stacks:
  - Front-end: EJS, CSS, Javascript
  - Back-end: NodeJS, Express

APIs utilizadas:
  - Correios;
  - IBGE.

Para testar o projeto, é necessário:
1. Iniciar o seu SGBD (Xampp ou MySQL Wokbench);
2. Alterar o arquivo config.json colocando o usuário e senha do seu SGBD
3. Executar os comandos a seguir:
   a. npm install (Instala as dependências do projeto)
   b. npx sequelize-cli db:migrate (para criar as tabelas do banco de dados)
   c. npx sequelize-cli db:seed:all (para popular o banco de dados com os dados iniciais de exemplo)
   d. npm start (para iniciar o servidor e abrir a aplicação)
4. No seu navegador, digitar http://localhost:3000



=======

