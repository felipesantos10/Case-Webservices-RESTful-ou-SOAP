
<p align="center">
   <img src="https://github.com/felipesantos10/Case-Webservices-RESTful-ou-SOAP/blob/master/imagem%20webservices/ws_01.jpg" alt="Webservices" />
</p>

<!-- Badges -->
<p align="center">
   <a href="https://www.linkedin.com/in/luis-felipe-santos-silva-5623a8197/">
      <img alt="Felipe Martins" src="https://img.shields.io/badge/-Felipe Santos-blue?style=flat&logo=Linkedin&logoColor=bluee" />
   </a>
  <a href="https://www.undb.edu.br/">
    <img alt="UNDB" src="https://img.shields.io/badge/UNDB%20-blue">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blue">
</p>

<!-- Indice-->
<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-Funcionalidades">Funcionalidades</a> • 
 <a href="#Resultados">Resultados</a> •  
 <a href="#-Tecnologias">Tecnologias</a> • 
 <a href="#-licença">Licença</a>
</p>

<!--Sobre o projeto-->
## 💻 Sobre o projeto

O projeto foi desenvolvido para disciplina de Sistemas Distribuídos, contanto com a contribuição dos amigos [Ailton Viana](https://www.linkedin.com/in/ailtonvianajr/) e Gustavo Noleto, para responder o **CASE- Web Service Restful ou SOAP** que trouxe a seguinte problemática.

**SINOPSE DO CASE**
 Tendo em vista a possibilidade de integração empresarial, surgiu, ao longo do tempo, uma serie de tecnologias capazes de compartilhar informação em diversos formatos. Uma empresa deseja divulgar dados de preços de tal forma que as informações sobre seus produtos fiquem disponíveis para serem usadas em sites de pesquisa de produtos e valores. Dessa forma, imagine uma tabela como no exemplo abaixo:
 
<p align="center">
   <img src="https://github.com/felipesantos10/Case-Webservices-RESTful-ou-SOAP/blob/master/imagem%20webservices/imagem%20webservices/Captura%20de%20tela%20de%202020-09-26%2023-56-11.png" alt="webservices" />
</p>

 A empresa TechMaster Distributed Systems deseja contratar alguém capaz de projetar e desenvolver a solução para o problema proposto utilizando tecnologias SOAP ou RESTful permitindo interoperabilidade com os sistemas de sites de pesquisa de preço. A linguagem de programação será a escolha dos projetistas da solução e a tabela dos dados do exemplo está armazenada em um banco de dados Postgres SQL. A saída de dados deverá ser em JSON ou XML. Seja então o projetista e desenvolvedor da solução.

<!--Funcionalidades-->
## ⚙️Funcionalidades
A solução foi realizada através de uma API desenvolvida utilizando JavaScript aliada a tecnologia Node.js, que é uma framework backend paraJavaScript, a equipe utilizou a lib Express, que tem os recursos necessários para odesenvolvimento de webservices no padrão RESTful, além disso  optamos  por
utilizar como banco de dados o MongoDB, que é um banco de dados NoSQL,diferente do modelo relacional.
A plataforma foi desenvolvida utilizando o Node.js para a criação do servidor, da estrutura de roteamento e dos middlewares que atuam na API. No banco de dados foi criada a entidade "Produto" com os atributos código, descrição e preço. Para esta entidade, foi desenvolvida um CRUD, que é responsável pelas
ações de criar, ler, atualizar e apagar um registro da base de dados. Ao passo do desenvolvimento das operações básicas de manipulação de dados na API, foram criadas as rotas com os verbos padrões de acesso aos recursos do RESTful, sendo elas: GET para a obtenção de um registro ou de um conjunto de registros (imagem 1), POST para a criação de um novo registro (imagem 2), DELETE para a remoção de um registro (imagem 3) e PATCH, para a atualização de dados de um registro (imagem 4).

## RESULTADOS
###  GET
<p align="center">
   <img src="https://github.com/felipesantos10/Case-Webservices-RESTful-ou-SOAP/blob/master/imagem%20webservices/imagem%20webservices/imagem%201.png" alt="get" />
</p>

###  POST
<p align="center">
   <img src="https://github.com/felipesantos10/Case-Webservices-RESTful-ou-SOAP/blob/master/imagem%20webservices/imagem%20webservices/imagem%202.png" alt="post" />
</p>

###  DELETE
<p align="center">
   <img src="https://github.com/felipesantos10/Case-Webservices-RESTful-ou-SOAP/blob/master/imagem%20webservices/imagem%20webservices/imagem%203.png" alt="delete" />
</p>

###  PATCH
<p align="center">
   <img src="https://github.com/felipesantos10/Case-Webservices-RESTful-ou-SOAP/blob/master/imagem%20webservices/imagem%20webservices/imagem%204.png" alt="patch" />
</p>

<!--layout-->
## 🚀  Tecnologias
- [x]  **JAVASCRIPT**
- [x] **NODE JS**
- [x] **MONGO DB**
- [x] **EXPRESS** 

#### Ferramentas
- [**VS CODE**]()

<!--License session-->
## 📝 Licença
### Este projeto está sob a licença [MIT](./LICENSE).
---

<h4 align=center>Desenvolvido por Ailton Viana, Gustavo Noleto e Felipe Santos <a href="https://www.linkedin.com/in/luis-felipe-santos-silva-5623a8197/"> <strong>Entre em contato</strong> :)</a></a></h4>
