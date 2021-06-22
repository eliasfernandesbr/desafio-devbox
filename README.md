
 ![GitHub repo size](https://img.shields.io/github/repo-size/eliasfernandesbr/nlw-valoriza?color=orange&logo=GitHub)
<!--  <a href="https://github.com/eliasfernandesbr">
  <img alt="Made by Elias Fernandes" src="https://img.shields.io/badge/-Linkedin-blue?style=for-the-badge&logo=LinkedIn&logoColor=white" />
  </a> -->



PASTA MODELS - CONEXÃO COM O BANCO DE DADOS
PASTA controllers - ficará todas as funções / lógica do negócio

START MONGODB - "C:\Program Files\MongoDB\Server\4.4\bin\mongod.exe"
CONNECT MONGODB - "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe"

Routes Params => Parâmetros que fazem parte da rota, por exemplo http://localhost:3000/produtos/87454984678945611
Query Params => Quando queremos fazer um filtro, por exemplo http://localhost:3000/produtos?name=teclado&description=tecladobom
Body Params => Utilizados nos métodos, por exemplo enviar um obj = {
  'name':'teclado',
  'description':'tecladobom'
}